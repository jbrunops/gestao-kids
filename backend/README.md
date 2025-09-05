# Gestão Kids - Backend Java Spring Boot

API REST para o sistema de controle de tempo de tela para crianças.

> **Nota**: Este é o backend do projeto Gestão Kids. Para a documentação completa, veja o [README principal](../README.md).

## 🚀 Tecnologias

- **Java 17+** - Linguagem principal
- **Spring Boot 3.x** - Framework
- **Spring Security** - Autenticação e autorização
- **Spring Data JPA** - Persistência de dados
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação stateless
- **Maven** - Gerenciamento de dependências

## 📋 Funcionalidades

### ✅ **Sistema de Autenticação**
- Autenticação JWT
- Registro e login de usuários
- Controle de permissões por role
- Proteção de endpoints

### ✅ **Gerenciamento de Usuários**
- CRUD de usuários
- Diferenciação entre pais e crianças
- Gerenciamento de perfis

### ✅ **Gerenciamento de Crianças**
- CRUD de perfis de crianças
- Controle de permissões
- Estatísticas de tempo
- Relacionamento com usuários

### ✅ **Sistema de Atividades**
- Registro de atividades
- Categorização (estudo/diversão)
- Histórico e relatórios
- Controle de tempo

### ✅ **Sistema de Tarefas**
- Criação e gerenciamento
- Prioridades e status
- Atribuição a crianças
- Acompanhamento

## 🛠️ Instalação e Execução

### Pré-requisitos
- Java 17+
- Maven 3.6+
- PostgreSQL 13+

### Configuração do Banco de Dados
```sql
CREATE DATABASE gestao_kids;
CREATE USER gestao_kids WITH PASSWORD 'gestao_kids123';
GRANT ALL PRIVILEGES ON DATABASE gestao_kids TO gestao_kids;
```

### Execução
```bash
# Instalar dependências
./mvnw clean install

# Executar aplicação
./mvnw spring-boot:run

# Ou executar o JAR
java -jar target/gestao-kids-backend-1.0.0.jar
```

### Com Docker
```bash
# Build da imagem
docker build -t gestao-kids-backend .

# Executar container
docker run -p 8080:8080 gestao-kids-backend
```

## 🔧 Configuração

### application.yml
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/gestao_kids
    username: gestao_kids
    password: gestao_kids123
  
  security:
    jwt:
      secret: gestao-kids-secret-key-2024
      expiration: 86400000

server:
  port: 8080
  servlet:
    context-path: /api
```

### Variáveis de Ambiente
```bash
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/gestao_kids
export SPRING_DATASOURCE_USERNAME=gestao_kids
export SPRING_DATASOURCE_PASSWORD=gestao_kids123
export SPRING_JWT_SECRET=gestao-kids-secret-key-2024
```

## 🏗️ Arquitetura

### Estrutura do Projeto
```
src/main/java/com/gestaokids/
├── controller/         # Controllers REST
├── service/           # Lógica de negócio
├── repository/        # Acesso a dados
├── model/             # Entidades JPA
├── dto/               # Data Transfer Objects
├── config/            # Configurações
├── security/          # Configurações de segurança
└── exception/         # Tratamento de exceções
```

### Entidades Principais
- **User**: Usuários do sistema (pais e crianças)
- **Child**: Perfis das crianças
- **Activity**: Atividades registradas
- **Task**: Tarefas atribuídas
- **Reward**: Sistema de recompensas

## 🔗 API Endpoints

### Autenticação
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro

### Crianças
- `GET /api/children` - Listar crianças
- `POST /api/children` - Criar criança
- `GET /api/children/{id}` - Obter criança
- `PUT /api/children/{id}` - Atualizar criança
- `DELETE /api/children/{id}` - Excluir criança

### Atividades
- `GET /api/activities` - Listar atividades
- `POST /api/activities` - Criar atividade
- `GET /api/activities/child/{childId}` - Atividades da criança

### Tarefas
- `GET /api/tasks` - Listar tarefas
- `POST /api/tasks` - Criar tarefa
- `PUT /api/tasks/{id}` - Atualizar tarefa
- `DELETE /api/tasks/{id}` - Excluir tarefa

## 🧪 Testes

```bash
# Executar todos os testes
./mvnw test

# Executar testes com cobertura
./mvnw test jacoco:report

# Executar testes de integração
./mvnw verify
```

## 📊 Banco de Dados

### Schema Principal
```sql
-- Tabela de usuários
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de crianças
CREATE TABLE children (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    avatar VARCHAR(255),
    allow_study BOOLEAN DEFAULT TRUE,
    allow_fun BOOLEAN DEFAULT TRUE,
    study_time_today VARCHAR(20) DEFAULT '0h 0m',
    fun_time_today VARCHAR(20) DEFAULT '0h 0m',
    parent_id BIGINT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Deploy

### Deploy com Docker Compose
```bash
# Iniciar todos os serviços
docker-compose up -d

# Verificar logs
docker-compose logs -f backend
```

### Deploy em Produção
```bash
# Build para produção
./mvnw clean package -Pproduction

# Executar JAR
java -jar target/gestao-kids-backend-1.0.0.jar
```

## 📈 Monitoramento

### Health Check
- `GET /api/actuator/health` - Status da aplicação
- `GET /api/actuator/info` - Informações da aplicação

### Logs
```bash
# Ver logs da aplicação
tail -f logs/gestao-kids.log

# Ver logs do Docker
docker logs gestao-kids-backend
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
