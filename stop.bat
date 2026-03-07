@echo off
chcp 65001 >nul 2>&1
title CrystaSkill — Stopping Servers
color 0C
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║       Stopping CrystaSkill Servers...        ║
echo  ╚══════════════════════════════════════════════╝
echo.

echo  Attempting to stop named windows...
taskkill /f /fi "WINDOWTITLE eq CrystaSkill-Backend" >nul 2>&1
if %errorlevel% equ 0 (
    echo  ✅ Backend server stopped
) else (
    echo  ⓘ Backend server not found
)

taskkill /f /fi "WINDOWTITLE eq CrystaSkill-Frontend" >nul 2>&1
if %errorlevel% equ 0 (
    echo  ✅ Frontend server stopped
) else (
    echo  ⓘ Frontend server not found
)

echo.
echo  Stopping Node.js processes on ports 5000 and 9002...
for /f "tokens=5" %%a in ('netstat -aon ^| find "5000"') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| find "9002"') do taskkill /f /pid %%a >nul 2>&1
echo  ✅ Port processes cleaned up.

color 0A
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║  ✅ All CrystaSkill servers stopped!         ║
echo  ╚══════════════════════════════════════════════╝
echo.
timeout /t 2 /nobreak >nul
