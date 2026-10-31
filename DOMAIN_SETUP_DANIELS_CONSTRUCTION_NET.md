# `daniels-construction.net` — Live Domain & DNS Configuration Summary

## Status: LIVE (`HTTP 200 OK` on `daniels-construction.net` & `www.daniels-construction.net`)

Your custom domain **`daniels-construction.net`** (managed in your `gary@claims-solutions.com` Squarespace profile) is now **live and serving** your new **Daniel's Construction (`Daniels Construction of CP, LLC`)** website from GitHub Pages (`https://github.com/garyn09/daniels-construction-net`).

---

## 1. Completed Squarespace DNS & Nameserver Configuration

1. **Authoritative Nameservers Switched to Squarespace (`DNS` → `Domain Nameservers`):**
   - Replaced the inactive custom Cloudflare nameservers (`yolanda.ns.cloudflare.com`, `zac.ns.cloudflare.com`) with **Squarespace Default Nameservers**:
     - `nsd1.squarespacedns.com`
     - `nsd2.squarespacedns.com`
     - `nsd3.squarespacedns.com`
     - `nsd4.squarespacedns.com`
2. **Removed Old Squarespace Parking Preset (`DNS` → `DNS Settings`):**
   - Deleted the old `Squarespace Defaults` preset (`198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145`, and `www` → `ext-sq.squarespace.com`).
3. **Active GitHub Pages Custom DNS Records (`DNS` → `DNS Settings` → `Custom records`):**

| Host | Type | TTL | Data / Value |
| :--- | :--- | :--- | :--- |
| `@` | `A` | `4 hrs` | `185.199.108.153` |
| `@` | `A` | `4 hrs` | `185.199.109.153` |
| `@` | `A` | `4 hrs` | `185.199.110.153` |
| `@` | `A` | `4 hrs` | `185.199.111.153` |
| `www` | `CNAME` | `4 hrs` | `garyn09.github.io` |

---

## 2. Automatic Let's Encrypt HTTPS Certificate

- **HTTP (`http://daniels-construction.net` and `http://www.daniels-construction.net`)** is **live immediately** (`HTTP 200 OK`).
- **HTTPS (`https://daniels-construction.net`)**: Because the domain's authoritative nameservers were just switched from Cloudflare to Squarespace (`nsd1–nsd4.squarespacedns.com`), GitHub's Let's Encrypt certificate authority automatically provisions the free TLS certificate once the `.net` TLD nameserver delegation cache (TTL) finishes updating (typically 10–30 minutes).
- Once provisioned, you can check **Enforce HTTPS** at [github.com/garyn09/daniels-construction-net/settings/pages](https://github.com/garyn09/daniels-construction-net/settings/pages).
