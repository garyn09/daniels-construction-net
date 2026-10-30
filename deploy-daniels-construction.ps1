<#
.SYNOPSIS
  Build and deploy daniels-construction.net to Cloudflare Pages or GitHub Pages.
#>
param(
  [ValidateSet("cloudflare", "github", "build-only")]
  [string]$Target = "cloudflare"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "=== Building Daniel's Construction (daniels-construction.net) ===" -ForegroundColor Yellow
npm run build

if ($Target -eq "cloudflare") {
  Write-Host "`n=== Deploying dist/ to Cloudflare Pages (Project: daniels-construction-net) ===" -ForegroundColor Cyan
  npx wrangler pages deploy dist --project-name=daniels-construction-net --branch=main
  Write-Host "`nDone! In your Cloudflare Dashboard (dash.cloudflare.com), attach custom domain 'daniels-construction.net' to the 'daniels-construction-net' Pages project." -ForegroundColor Green
} elseif ($Target -eq "github") {
  Write-Host "`n=== Initializing & Pushing to GitHub Repository ===" -ForegroundColor Cyan
  if (-not (Test-Path ".git")) {
    git init
    git branch -M main
  }
  git add -A
  git commit -m "Deploy Daniel's Construction website (daniels-construction.net)" --allow-empty
  Write-Host "Repository committed and ready. Run: gh repo create daniels-construction-website --public --source=. --push" -ForegroundColor Green
}
