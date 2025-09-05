# Gestão Kids - Sistema de Controle de Tempo de Tela

Sistema completo de gerenciamento de tempo de tela para crianças, desenvolvido com Angular (frontend) e Java Spring Boot (backend).

## 🏗️ Arquitetura do Projeto

```
gestao-kids/
├── frontend/          # Aplicação Angular
├── backend/           # API Java Spring Boot
├── docker/            # Configurações Docker
├── docs/              # Documentação
└── scripts/           # Scripts de automação
```

## 🚀 Tecnologias

### Frontend
- **Angular 20+** - Framework principal
- **Angular Material** - Componentes de UI
- **TypeScript** - Linguagem de programação
- **SCSS** - Estilização
- **RxJS** - Programação reativa

### Backend
- **Java 17+** - Linguagem principal
- **Spring Boot 3.x** - Framework
- **Spring Security** - Autenticação e autorização
- **Spring Data JPA** - Persistência de dados
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação stateless

## 📋 Funcionalidades

### ✅ Implementadas
- **Autenticação completa** com JWT
- **Dashboard responsivo** para pais e crianças
- **Gerenciamento de perfis** de crianças
- **Sistema de tarefas** com prioridades
- **Sistema de recompensas** com pontos
- **Relatórios detalhados** de atividades
- **Histórico de atividades** com filtros
- **Configurações personalizáveis**

### 🔄 Em Desenvolvimento
- **Backend Java** com Spring Boot
- **API REST** completa
- **Banco de dados** PostgreSQL
- **Testes automatizados**
- **Deploy com Docker**

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- Java 17+
- PostgreSQL 13+
- Docker (opcional)

### Frontend
```bash
cd frontend
npm install
ng serve
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

### Docker
```bash
docker-compose up -d
```

## 📚 Documentação

- [Frontend](./frontend/README.md)
- [Backend](./backend/README.md)
- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Jackson Porciúncula
