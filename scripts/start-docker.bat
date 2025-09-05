@echo off
echo Starting Gestao Kids with Docker...
cd /d "%~dp0.."
echo.
echo Starting all services with Docker Compose...
docker-compose up -d
echo.
echo Services started! Check the status with: docker-compose ps
echo.
echo Backend: http://localhost:8080/api
echo Frontend: http://localhost:4200
echo Database: localhost:5432
echo.
pause
