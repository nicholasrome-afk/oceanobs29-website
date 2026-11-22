# DNS records for oceanobs29.net

Snapshot taken 2026-11-21 before the move to Cloudflare, from the authoritative nameservers
(`dig @ns-cloud-e1.googledomains.com`) and reconciled with the Squarespace Domains DNS Settings page.
Both lists matched exactly.

- **Registrar:** Squarespace Domains LLC (registration stays there; only DNS moves to Cloudflare)
- **Nameservers before launch:** `ns-cloud-e1.googledomains.com` … `ns-cloud-e4.googledomains.com`
- **Registration expires:** 2027-01-15 (check auto-renew and the card on file)
- **DNSSEC:** off (no DS record)
- **Final address:** `https://www.oceanobs29.net` (the old site also redirected the bare domain to www)

## Records and what happens to each

| Type           | Name           | Value                                                                | TTL (Squarespace) | At Cloudflare                                                              |
| -------------- | -------------- | -------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------- |
| A              | @              | 198.185.159.144                                                      | 4 h               | Copy, DNS only (grey cloud) until cutover; delete at cutover               |
| A              | @              | 198.185.159.145                                                      | 4 h               | Same                                                                       |
| A              | @              | 198.49.23.144                                                        | 4 h               | Same                                                                       |
| A              | @              | 198.49.23.145                                                        | 4 h               | Same                                                                       |
| CNAME          | www            | ext-sq.squarespace.com                                               | 4 h               | Copy, DNS only until cutover; delete at cutover                            |
| MX             | @              | 1 smtp.google.com                                                    | 30 min            | **Copy exactly and keep.** Mail for info@oceanobs29.net (Google Workspace) |
| TXT            | @              | google-site-verification=b1s3vVo6cWVQS7Q2pFMDx9-LbNugUIvkYB3X8kBjfGA | 30 min            | Copy and keep (Google Search Console)                                      |
| CNAME          | _domainconnect | _domainconnect.domains.squarespace.com                               | 1 h               | Don't copy (Squarespace setup helper)                                      |
| HTTPS (TYPE65) | www            | Squarespace's                                                        | –                 | Don't copy (old host's record)                                             |

No AAAA or CAA records exist.

## After cutover

The bare domain and `www` are attached to the Cloudflare Worker `oceanobs29-website` as custom
domains (Cloudflare creates those records itself). `oceanobs29.net` redirects to
`https://www.oceanobs29.net` with a 301 Single Redirect rule that keeps the path and query string.

## Email authentication

At the time of the snapshot the domain had **no SPF, DKIM or DMARC records**: mail worked on the MX
record alone. The launch copies this as it is. Adding them is a separate task for whoever administers
the Google Workspace account (DKIM key is generated in the Google Admin console):

- SPF: `TXT @ "v=spf1 include:_spf.google.com ~all"`
- DKIM: `TXT google._domainkey "<key from Google Admin>"`
- DMARC: `TXT _dmarc "v=DMARC1; p=none; rua=mailto:<reporting address>"`, tightened later
