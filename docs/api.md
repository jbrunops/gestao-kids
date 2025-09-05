# API Documentation - Gestão Kids

## Base URL
```
http://localhost:8080/api
```

## Autenticação
Todas as rotas protegidas requerem um token JWT no header:
```
Authorization: Bearer <token>
```

## Endpoints

### Autenticação

#### POST /auth/login
Login de usuário
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "user@example.com",
    "role": "PARENT",
    "avatar": "avatar.jpg"
  }
}
```

#### POST /auth/register
Registro de novo usuário
```json
{
  "name": "João Silva",
  "email": "user@example.com",
  "password": "password123",
  "role": "PARENT"
}
```

### Crianças

#### GET /children
Listar todas as crianças do usuário autenticado

#### GET /children/{id}
Obter criança específica

#### POST /children
Criar nova criança
```json
{
  "name": "Maria Silva",
  "age": 8,
  "avatar": "avatar.jpg",
  "allowStudy": true,
  "allowFun": true
}
```

#### PUT /children/{id}
Atualizar criança

#### DELETE /children/{id}
Excluir criança

#### GET /children/{id}/stats
Obter estatísticas da criança

### Atividades

#### GET /activities
Listar atividades do usuário

#### GET /activities/child/{childId}
Listar atividades de uma criança

#### POST /activities
Criar nova atividade
```json
{
  "name": "Estudo de Matemática",
  "type": "STUDY",
  "duration": "1h 30m",
  "childId": 1
}
```

#### GET /activities/history/{childId}
Obter histórico de atividades

### Tarefas

#### GET /tasks
Listar tarefas

#### POST /tasks
Criar nova tarefa
```json
{
  "title": "Fazer lição de casa",
  "description": "Completar exercícios de matemática",
  "priority": "HIGH",
  "childId": 1
}
```

#### PUT /tasks/{id}
Atualizar tarefa

#### DELETE /tasks/{id}
Excluir tarefa

## Códigos de Status

- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Dados inválidos
- `401` - Não autenticado
- `403` - Não autorizado
- `404` - Não encontrado
- `500` - Erro interno do servidor

## Exemplos de Uso

### Login e obtenção de token
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Listar crianças
```bash
curl -X GET http://localhost:8080/api/children \
  -H "Authorization: Bearer <token>"
```
