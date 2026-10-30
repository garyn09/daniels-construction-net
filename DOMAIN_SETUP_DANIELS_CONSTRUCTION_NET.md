# Connecting `daniels-construction.net` to Your New Website

## Live DNS Diagnostic Summary (Verified)
Our live DNS and HTTP inspection of `daniels-construction.net` found:
- **Active Nameservers:** Cloudflare (`zac.ns.cloudflare.com` and `yolanda.ns.cloudflare.com`)
- **Current Proxy IP Addresses:** `172.67.147.172` and `104.21.33.177` (Cloudflare Proxy)
- **Current Origin Target:** Points to a deleted Squarespace site (`Squarespace - No Such Website / SITE DELETED`).

Because your domain is **already managed in Cloudflare**, connecting this new website to `daniels-construction.net` is free, includes automatic SSL/HTTPS, and takes less than 2 minutes.

---

## Option A: Deploy Directly on Cloudflare Pages (Recommended — Fastest & Free)

Since `daniels-construction.net` is already on your Cloudflare account:

### Method 1: One-Command CLI Deployment from This Folder
Run the following command in PowerShell inside `m:\Daniels construction website`:
```powershell
npm run build
npx wrangler pages deploy dist --project-name=daniels-construction-net
```
*(The first time you run it, a browser window will open to log into your Cloudflare account).*

### Method 2: Connect Custom Domain in Cloudflare Dashboard
1. Log into [dash.cloudflare.com](https://dash.cloudflare.com/).
2. Go to **DNS → Records** for `daniels-construction.net` and **delete** the old Squarespace `A` and `CNAME` records (`ext-cust.squarespace.com` / `198.185.159.x`).
3. Go to **Workers & Pages** → select **`daniels-construction-net`** → **Custom Domains** → **Set up a custom domain**.
4. Enter `daniels-construction.net` and click **Activate Domain** (Cloudflare automatically adds the DNS record).
5. Repeat for `www.daniels-construction.net`.

---

## Option B: Deploy via GitHub Pages (Already Configured in `.github/workflows/deploy.yml` & `CNAME`)

1. Push this repository to GitHub (e.g. `garyn09/daniels-construction-website`).
2. In your GitHub repository, go to **Settings → Pages**:
   - Under **Build and deployment → Source**, select **GitHub Actions**.
   - Under **Custom domain**, `daniels-construction.net` is already pre-configured via the `/CNAME` file.
3. In your **Cloudflare Dashboard → DNS → Records** for `daniels-construction.net`:
   - Delete the old Squarespace records.
   - Add 4 `A` records for `@` (`daniels-construction.net`) pointing to GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a `CNAME` record for `www` pointing to `garyn09.github.io`.
