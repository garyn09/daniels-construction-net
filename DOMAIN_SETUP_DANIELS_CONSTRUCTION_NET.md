# Connecting `daniels-construction.net` (Squarespace Domains) to Your Live Website

## Current Status: Hosting is LIVE & Waiting for Your DNS Switch
Your website is **already deployed, built, and live** on GitHub Pages under your account (`https://github.com/garyn09/daniels-construction-net`) and configured to accept traffic for **`daniels-construction.net`**.

Right now, `daniels-construction.net` is registered on one of your **Squarespace** profiles, and its DNS is still pointing to a deleted Squarespace site (`Squarespace - No Such Website / SITE DELETED`) with Cloudflare nameservers (`zac.ns.cloudflare.com` and `yolanda.ns.cloudflare.com`).

Follow the steps below inside your **Squarespace Domains** dashboard to complete the connection in 60 seconds:

---

## Step-by-Step in Your Squarespace Profile

### Step 1: Open Your Domain in Squarespace
1. Log into your Squarespace account at [account.squarespace.com/domains](https://account.squarespace.com/domains) (check whichever of your 2 profiles holds **`daniels-construction.net`**).
2. Click **`daniels-construction.net`**.

### Step 2: Check "Domain Nameservers" (Crucial!)
1. In the left sidebar, click **DNS** → **Domain Nameservers**.
2. Currently, live DNS shows custom Cloudflare nameservers (`zac.ns.cloudflare.com` and `yolanda.ns.cloudflare.com`).
   - **If you want to manage DNS right inside Squarespace:** Click **Use Squarespace nameservers** and click **Save**.
   - *(Alternatively, if you prefer to keep Cloudflare nameservers active, simply add the records in Step 4 inside your Cloudflare dashboard instead).*

### Step 3: Remove the Old "Squarespace Defaults" Preset
1. In the left sidebar under **DNS**, click **DNS Settings**.
2. At the top under **Squarespace Defaults** (or **Website Defaults**), click the **Trash Can / Delete** button to remove the old deleted Squarespace website preset. *(This is what causes the "Squarespace - No Such Website / SITE DELETED" screen).*

### Step 4: Add These 5 Custom Records under "Custom Records"
Scroll down to **Custom Records** → click **Add Record** and enter these exact 5 records:

| Host | Type | Priority | Data / Value |
| :--- | :--- | :--- | :--- |
| `@` | `A` | *(leave blank)* | `185.199.108.153` |
| `@` | `A` | *(leave blank)* | `185.199.109.153` |
| `@` | `A` | *(leave blank)* | `185.199.110.153` |
| `@` | `A` | *(leave blank)* | `185.199.111.153` |
| `www` | `CNAME` | *(leave blank)* | `garyn09.github.io` |

Click **Save**.

---

## Step 5: Automatic HTTPS Certificate (After DNS Propagates)
Within 5–30 minutes after saving those DNS records in Squarespace:
1. `http://daniels-construction.net` and `http://www.daniels-construction.net` will immediately load your new **Daniel's Construction** website.
2. GitHub Pages (`https://github.com/garyn09/daniels-construction-net/settings/pages`) will automatically issue your free Let's Encrypt SSL certificate so you can check **Enforce HTTPS**.
