# 🎯 Gestão Kids - Sistema de Controle de Tempo de Tela

Sistema completo para gerenciamento de tempo de tela de crianças, desenvolvido com Angular (frontend) e Spring Boot (backend).

## 🚀 Status do Projeto

### ✅ **COMPLETO E FUNCIONANDO:**
- **Frontend Angular** - 100% implementado
- **Backend Spring Boot** - 100% implementado
- **Banco de dados PostgreSQL** - Configurado
- **Docker** - Configurado
- **Autenticação JWT** - Implementada
- **API REST** - Completa

## 📋 Funcionalidades

### 👨‍👩‍👧‍👦 **Para Pais:**
- Cadastro e login de usuários
- Gerenciamento de perfis das crianças
- Controle de tempo de estudo e diversão
- Sistema de tarefas e recompensas
- Relatórios e histórico de atividades
- Dashboard com métricas

### 👶 **Para Crianças:**
- Interface amigável e colorida
- Visualização de tarefas pendentes
- Sistema de recompensas gamificado
- Controle de tempo de tela
- Histórico de atividades

## 🛠️ Tecnologias

### **Frontend:**
- Angular 20
- Angular Material
- TypeScript
- SCSS
- RxJS

### **Backend:**
- Java 17
- Spring Boot 3.2
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT Authentication

### **Infraestrutura:**
- Docker & Docker Compose
- PostgreSQL 15
- Maven

## 🚀 Como Executar

### **Opção 1: Docker (Recomendado)**
```bash
# Iniciar todos os serviços
docker-compose up -d

# Verificar status
docker-compose ps

# Parar serviços
docker-compose down
```

### **Opção 2: Desenvolvimento Local**

#### **Backend:**
```bash
cd backend
mvn spring-boot:run
```

#### **Frontend:**
```bash
cd frontend
npm install
npm start
```

#### **Banco de Dados:**
```bash
# Iniciar apenas o PostgreSQL
docker-compose up -d postgres
```

### **Opção 3: Scripts Automatizados (Windows)**
```bash
# Iniciar com Docker
scripts/start-docker.bat

# Iniciar backend local
scripts/start-backend.bat

# Iniciar frontend local
scripts/start-frontend.bat
```

## 🌐 URLs de Acesso

- **Frontend:** http://localhost:4200
- **Backend API:** http://localhost:8080/api
- **Banco de Dados:** localhost:5432

## 📊 Estrutura do Projeto

```
gestao-kids/
├── frontend/                 # ✅ Angular Frontend
│   ├── src/app/
│   │   ├── components/       # Componentes Angular
│   │   ├── services/         # Serviços HTTP
│   │   ├── guards/           # Guards de autenticação
│   │   ├── interceptors/     # Interceptors HTTP
│   │   └── models/           # Modelos TypeScript
│   └── environments/         # Configurações de ambiente
├── backend/                  # ✅ Spring Boot Backend
│   ├── src/main/java/com/gestaokids/
│   │   ├── controller/       # Controllers REST
│   │   ├── service/          # Lógica de negócio
│   │   ├── repository/       # Repositórios JPA
│   │   ├── model/            # Entidades JPA
│   │   ├── dto/              # DTOs
│   │   ├── security/         # Configurações de segurança
│   │   └── exception/        # Tratamento de exceções
│   └── src/main/resources/
│       └── application.yml   # Configurações
├── docker/                   # ✅ Scripts Docker
├── docs/                     # ✅ Documentação
└── scripts/                  # ✅ Scripts de automação
```

## 🔐 Autenticação

O sistema utiliza JWT (JSON Web Tokens) para autenticação:

- **Login:** `POST /api/auth/login`
- **Registro:** `POST /api/auth/register`
- **Token:** Incluído no header `Authorization: Bearer <token>`

## 📚 API Endpoints

### **Autenticação**
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro

### **Crianças**
- `GET /api/children/parent/{parentId}` - Listar crianças do pai
- `GET /api/children/{id}` - Buscar criança por ID
- `POST /api/children` - Criar criança
- `PUT /api/children/{id}` - Atualizar criança
- `DELETE /api/children/{id}` - Deletar criança

### **Atividades**
- `GET /api/activities/child/{childId}` - Listar atividades da criança
- `GET /api/activities/child/{childId}/date/{date}` - Atividades por data
- `POST /api/activities` - Criar atividade
- `PUT /api/activities/{id}` - Atualizar atividade
- `DELETE /api/activities/{id}` - Deletar atividade

### **Tarefas**
- `GET /api/tasks/child/{childId}` - Listar tarefas da criança
- `GET /api/tasks/child/{childId}/status/{status}` - Tarefas por status
- `POST /api/tasks` - Criar tarefa
- `PUT /api/tasks/{id}` - Atualizar tarefa
- `PATCH /api/tasks/{id}/status/{status}` - Atualizar status
- `DELETE /api/tasks/{id}` - Deletar tarefa

### **Recompensas**
- `GET /api/rewards/child/{childId}` - Listar recompensas da criança
- `GET /api/rewards/available` - Listar recompensas disponíveis
- `POST /api/rewards` - Criar recompensa
- `POST /api/rewards/{id}/earn/{childId}` - Ganhar recompensa
- `POST /api/rewards/{id}/redeem` - Resgatar recompensa
- `DELETE /api/rewards/{id}` - Deletar recompensa

## 🗄️ Banco de Dados

### **Tabelas:**
- `users` - Usuários (pais e crianças)
- `children` - Perfis das crianças
- `activities` - Atividades realizadas
- `tasks` - Tarefas atribuídas
- `rewards` - Sistema de recompensas

### **Dados de Exemplo:**
O sistema inclui dados de exemplo para teste:
- 2 usuários pais
- 3 crianças
- Atividades, tarefas e recompensas de exemplo

## 🔧 Configurações

### **Backend (application.yml):**
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/gestao_kids
    username: gestao_kids
    password: gestao_kids123
  security:
    jwt:
      secret: gestao-kids-secret-key-2024
      expiration: 86400000 # 24 horas
server:
  port: 8080
  servlet:
    context-path: /api
```

### **Frontend (environment.ts):**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  appName: 'Gestão Kids',
  version: '1.0.0'
};
```

## 🐳 Docker

### **Serviços:**
- **postgres:** Banco de dados PostgreSQL
- **backend:** API Spring Boot
- **frontend:** Aplicação Angular

### **Comandos Docker:**
```bash
# Iniciar todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar serviços
docker-compose down

# Rebuild e iniciar
docker-compose up --build -d
```

## 🧪 Testes

### **Backend:**
```bash
cd backend
mvn test
```

### **Frontend:**
```bash
cd frontend
npm test
```

## 📝 Desenvolvimento

### **Estrutura de Branches:**
- `main` - Código de produção
- `develop` - Código de desenvolvimento
- `feature/*` - Novas funcionalidades

### **Padrões de Código:**
- **Backend:** Java 17, Spring Boot, JPA
- **Frontend:** Angular 20, TypeScript, SCSS
- **Commits:** Conventional Commits

## 🚀 Deploy

### **Produção:**
1. Build do frontend: `ng build --prod`
2. Build do backend: `mvn clean package`
3. Deploy com Docker: `docker-compose -f docker-compose.prod.yml up -d`

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar logs: `docker-compose logs`
2. Verificar status: `docker-compose ps`
3. Rebuild: `docker-compose up --build -d`

## 📄 Licença

Este projeto é de uso interno e educacional.

---

**🎉 Projeto 100% funcional e pronto para uso!**