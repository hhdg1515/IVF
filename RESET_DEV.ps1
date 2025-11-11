# IVY Fertility Dev Reset Script
# 清理旧进程、删除缓存、启动新开发服务器

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IVY Fertility Dev Reset Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. 杀死所有旧 Node 进程
Write-Host "⏹️  Killing old Node processes..." -ForegroundColor Yellow
taskkill /F /IM node.exe 2>$null
Start-Sleep -Milliseconds 500

# 2. 清理 .next 缓存
Write-Host "🗑️  Cleaning .next cache..." -ForegroundColor Yellow
Remove-Item "$ProjectRoot\.next" -Recurse -Force -ErrorAction SilentlyContinue

# 3. 清理 node_modules 中的缓存
Write-Host "🗑️  Cleaning node_modules cache..." -ForegroundColor Yellow
Remove-Item "$ProjectRoot\node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue

# 4. 释放 3000-3010 端口
Write-Host "🔓 Releasing ports 3000-3010..." -ForegroundColor Yellow
for ($port = 3000; $port -le 3010; $port++) {
    Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue |
        Stop-Process -Force -ErrorAction SilentlyContinue
}

# 5. 启动新的开发服务器
Write-Host ""
Write-Host "✨ Starting dev server..." -ForegroundColor Green
Write-Host "📍 Project: $ProjectRoot" -ForegroundColor Green
Write-Host ""

cd $ProjectRoot
npm run dev
