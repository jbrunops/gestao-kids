@echo off
REM Script para iniciar o ambiente de desenvolvimento no Windows
echo 🚀 Iniciando ambiente de desenvolvimento Gestão Kids...

REM Verificar se Docker está rodando
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker não está rodando. Por favor, inicie o Docker e tente novamente.
    pause
    exit /b 1
)

REM Iniciar serviços com Docker Compose
echo 📦 Iniciando serviços com Docker Compose...
docker-compose up -d postgres

REM Aguardar o banco de dados estar pronto
echo ⏳ Aguardando banco de dados estar pronto...
timeout /t 10 /nobreak >nul

REM Iniciar backend
echo ☕ Iniciando backend Java...
cd backend
start "Backend" cmd /k "mvnw spring-boot:run"

REM Aguardar backend estar pronto
echo ⏳ Aguardando backend estar pronto...
timeout /t 15 /nobreak >nul

REM Iniciar frontend
echo 🅰️ Iniciando frontend Angular...
cd ..\frontend
call npm install
start "Frontend" cmd /k "ng serve"

echo ✅ Ambiente de desenvolvimento iniciado!
echo 🌐 Frontend: http://localhost:4200
echo 🔧 Backend: http://localhost:8080/api
echo 🗄️ Banco de dados: localhost:5432
echo.
echo Pressione qualquer tecla para parar os serviços...
pause >nul

REM Parar serviços
echo 🛑 Parando serviços...
docker-compose down
