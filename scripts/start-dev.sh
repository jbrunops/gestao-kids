#!/bin/bash

# Script para iniciar o ambiente de desenvolvimento
echo "🚀 Iniciando ambiente de desenvolvimento Gestão Kids..."

# Verificar se Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Por favor, inicie o Docker e tente novamente."
    exit 1
fi

# Iniciar serviços com Docker Compose
echo "📦 Iniciando serviços com Docker Compose..."
docker-compose up -d postgres

# Aguardar o banco de dados estar pronto
echo "⏳ Aguardando banco de dados estar pronto..."
sleep 10

# Iniciar backend
echo "☕ Iniciando backend Java..."
cd backend
./mvnw spring-boot:run &
BACKEND_PID=$!

# Aguardar backend estar pronto
echo "⏳ Aguardando backend estar pronto..."
sleep 15

# Iniciar frontend
echo "🅰️ Iniciando frontend Angular..."
cd ../frontend
npm install
ng serve &
FRONTEND_PID=$!

echo "✅ Ambiente de desenvolvimento iniciado!"
echo "🌐 Frontend: http://localhost:4200"
echo "🔧 Backend: http://localhost:8080/api"
echo "🗄️ Banco de dados: localhost:5432"

# Função para parar os serviços
cleanup() {
    echo "🛑 Parando serviços..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    docker-compose down
    exit 0
}

# Capturar Ctrl+C
trap cleanup SIGINT

# Manter script rodando
wait
