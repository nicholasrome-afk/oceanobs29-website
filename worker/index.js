// Range requests for the hero video (2026-11-20).
//
// Cloudflare's static-asset server answers a `Range: bytes=…` request with the
// whole file (200), but Safari on iPhone and Mac will only play MP4 video when
// the server returns the requested slice (206 Partial Content). This Worker runs
// only for /video/* (see `run_worker_first` in wrangler.jsonc); every other URL
// is served straight from the static assets, as before.
//
// Docs: https://developers.cloudflare.com/workers/static-assets/binding/

const RANGE = /^bytes=(\d*)-(\d*)$/;

/** Parse a single-range header against a file size. Returns null when unsatisfiable. */
export function parseRange(header, size) {
  const match = RANGE.exec(header.trim());
  if (!match || (match[1] === '' && match[2] === '')) return null;
  let start;
  let end;
  if (match[1] === '') {
    // Suffix range, e.g. "bytes=-500": the last 500 bytes.
    const length = Number(match[2]);
    if (length === 0) return null;
    start = Math.max(size - length, 0);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] === '' ? size - 1 : Math.min(Number(match[2]), size - 1);
  }
  if (start >= size || start > end) return null;
  return { start, end };
}

export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    }

    // Ask the asset server for the whole file (no Range), then slice it here.
    const asset = await env.ASSETS.fetch(new Request(request.url, { method: 'GET' }));
    if (asset.status !== 200) return asset;

    const headers = new Headers(asset.headers);
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Cache-Control', 'public, max-age=86400');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.delete('Content-Range');

    const body = await asset.arrayBuffer();
    const size = body.byteLength;
    const rangeHeader = request.headers.get('Range');

    if (!rangeHeader) {
      headers.set('Content-Length', String(size));
      return new Response(request.method === 'HEAD' ? null : body, { status: 200, headers });
    }

    const range = parseRange(rangeHeader, size);
    if (!range) {
      headers.set('Content-Range', `bytes */${size}`);
      headers.set('Content-Length', '0');
      return new Response(null, { status: 416, headers });
    }

    const { start, end } = range;
    headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
    headers.set('Content-Length', String(end - start + 1));
    return new Response(request.method === 'HEAD' ? null : body.slice(start, end + 1), { status: 206, headers });
  },
};
