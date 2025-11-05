@echo off
REM IVY Fertility Dev Server Launcher
echo Starting IVY Fertility Dev Server...
echo.

cd /d "%~dp0"

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Start dev server
echo Launching Next.js dev server...
echo.
call npm run dev

pause
