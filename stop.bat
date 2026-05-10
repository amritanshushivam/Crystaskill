@echo off
chcp 65001 >nul 2>&1
title CrystaSkill — Stopping Servers
echo.
echo  Stopping all CrystaSkill servers...
taskkill /f /fi "WINDOWTITLE eq CrystaSkill-Backend" >nul 2>&1
taskkill /f /fi "WINDOWTITLE eq CrystaSkill-Frontend" >nul 2>&1
taskkill /f /im node.exe >nul 2>&1
echo  ✅ All servers stopped.
timeout /t 2 /nobreak >nul
