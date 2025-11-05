# IVY Fertility Dev Server Launcher (PowerShell)

Write-Host "Starting IVY Fertility Dev Server..." -ForegroundColor Green
Write-Host ""

# Get script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Start dev server
Write-Host "Launching Next.js dev server..." -ForegroundColor Green
Write-Host ""
npm run dev

Read-Host "Press Enter to exit"
