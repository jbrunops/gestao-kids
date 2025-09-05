# Gestão Kids - Frontend Angular

Sistema de controle de tempo de tela para crianças desenvolvido em Angular 20+.

> **Nota**: Este é o frontend do projeto Gestão Kids. Para a documentação completa, veja o [README principal](../README.md).

## 🚀 Tecnologias

- **Angular 20+** - Framework principal
- **Angular Material** - Componentes de UI
- **TypeScript** - Linguagem de programação
- **SCSS** - Estilização avançada
- **RxJS** - Programação reativa
- **HTTP Client** - Comunicação com API
- **Guards** - Proteção de rotas
- **Interceptors** - Interceptação de requisições HTTP

## 📋 Funcionalidades Implementadas

### ✅ **Sistema de Autenticação**
- Login com validação e estados de loading
- Gerenciamento de sessão com JWT
- Guards de rota para proteção
- Logout seguro com limpeza de dados

### ✅ **Dashboard Principal**
- Visualização de perfis das crianças
- Estatísticas de tempo de estudo/diversão
- Ações para gerenciar perfis
- Interface responsiva e moderna

### ✅ **Gerenciamento de Crianças**
- Cadastro de novos perfis
- Edição de informações
- Controle de permissões
- Exclusão de perfis

### ✅ **Sistema de Atividades**
- Histórico detalhado de atividades
- Filtros por data e tipo
- Gráficos de tempo gasto
- Relatórios estatísticos

### ✅ **Sistema de Tarefas**
- Criação e gerenciamento de tarefas
- Prioridades e status
- Atribuição a crianças
- Acompanhamento de progresso

### ✅ **Sistema de Recompensas**
- Criação de recompensas personalizadas
- Sistema de pontos
- Categorização por tipo
- Controle de uso e resgate

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run start
# ou
ng serve

# Compilar para produção
npm run build
# ou
ng build --configuration production
```

### Scripts Disponíveis
```bash
npm run start          # Servidor de desenvolvimento
npm run build          # Build para produção
npm run test           # Executar testes
npm run lint           # Verificar código
```

## 🔧 Configuração

### Variáveis de Ambiente
O projeto utiliza diferentes configurações para desenvolvimento e produção:

- **Desenvolvimento**: `src/environments/environment.ts`
- **Produção**: `src/environments/environment.prod.ts`

### Configuração da API
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  appName: 'Gestão Kids',
  version: '1.0.0'
};
```

## 🏗️ Arquitetura

### Estrutura de Componentes
```
src/app/
├── components/           # Componentes da aplicação
│   ├── login/           # Autenticação
│   ├── dashboard/       # Dashboard principal
│   ├── add-child/       # Cadastro de criança
│   ├── child-dashboard/ # Interface da criança
│   ├── activity-history/# Histórico de atividades
│   ├── tasks/           # Sistema de tarefas
│   ├── rewards/         # Sistema de recompensas
│   └── settings/        # Configurações
├── services/            # Serviços HTTP
│   ├── auth.ts         # Autenticação
│   ├── child.ts        # Gerenciamento de crianças
│   └── activity.ts     # Atividades
├── guards/              # Guards de rota
├── interceptors/        # Interceptors HTTP
├── models/              # Interfaces TypeScript
└── environments/        # Configurações de ambiente
```

### Serviços Implementados
- **`AuthService`**: Autenticação JWT, gerenciamento de sessão
- **`ChildService`**: CRUD de crianças com estatísticas
- **`ActivityService`**: Gerenciamento de atividades e relatórios
- **`AuthInterceptor`**: Adiciona tokens automaticamente
- **`AuthGuard`**: Protege rotas autenticadas

## 🔗 Integração com Backend

O frontend está preparado para integração com a API Java Spring Boot:

### Endpoints Esperados
```
POST /api/auth/login
POST /api/auth/register
GET  /api/children
POST /api/children
GET  /api/activities
POST /api/activities
GET  /api/tasks
POST /api/tasks
```

### Tratamento de Erros
- Fallback para dados mockados quando API não está disponível
- Mensagens de erro amigáveis para o usuário
- Estados de loading durante requisições

## 🧪 Testes

```bash
# Executar testes unitários
npm run test

# Executar testes com cobertura
npm run test:coverage

# Executar testes e2e
npm run e2e
```

## 📦 Build e Deploy

### Build para Produção
```bash
ng build --configuration production
```

### Deploy com Docker
```bash
# Build da imagem
docker build -t gestao-kids-frontend .

# Executar container
docker run -p 4200:4200 gestao-kids-frontend
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
