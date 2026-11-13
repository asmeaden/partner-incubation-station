# Local preview: serves docs/ at http://localhost:8080/
# If scripts are blocked, run: powershell -ExecutionPolicy Bypass -File .\serve.ps1
$ErrorActionPreference = "Stop"
$docs = Join-Path $PSScriptRoot "docs"
$port = 8080
$url  = "http://localhost:$port/"

Write-Host "Starting local preview at $url  (press Ctrl+C to stop)" -ForegroundColor Cyan
Start-Process $url | Out-Null

Push-Location $docs
try {
  if (Get-Command python -ErrorAction SilentlyContinue) { python -m http.server $port }
  elseif (Get-Command py -ErrorAction SilentlyContinue) { py -m http.server $port }
  else { Write-Warning "Python not found. Install it from https://python.org, then re-run." }
} finally { Pop-Location }
