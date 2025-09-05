# Gestão Kids - Frontend Angular

Sistema de controle de tempo de tela para crianças desenvolvido em Angular 17+.

## Sobre o Projeto

Sistema de controle de tempo de tela para crianças desenvolvido com foco em:
- Interface intuitiva e responsiva
- Design moderno e clean
- Arquitetura escalável e manutenível
- Integração preparada para backend Java

## Estrutura do Projeto

```
src/app/
├── components/           # Componentes da aplicação
│   ├── login/           # Tela de autenticação
│   ├── dashboard/       # Dashboard principal dos pais
│   ├── add-child/       # Formulário de cadastro de criança
│   ├── child-dashboard/ # Interface da criança
│   ├── activity-history/# Histórico de atividades
│   └── profile-selector/# Seletor de perfil
├── models/              # Interfaces TypeScript
├── services/            # Serviços para integração com API
└── assets/              # Recursos estáticos (imagens, ícones)
```

## Tecnologias

- **Angular 20+** - Framework principal
- **Angular Material** - Componentes de UI
- **SCSS** - Estilização avançada
- **Reactive Forms** - Validação de formulários
- **Angular Router** - Navegação com Lazy Loading
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **HTTP Client** - Comunicação com API
- **Guards** - Proteção de rotas
- **Interceptors** - Interceptação de requisições HTTP

## Funcionalidades Implementadas

### Telas Principais
- **Login**: Autenticação de usuários com validação de formulário
- **Registro**: Cadastro de novos usuários com validação de senha
- **Dashboard**: Visualização dos perfis das crianças com estatísticas
- **Adicionar Criança**: Formulário para cadastro de novos perfis
- **Dashboard da Criança**: Interface amigável para as crianças
- **Histórico de Atividades**: Relatório detalhado com tabelas e gráficos
- **Seletor de Perfil**: Tela de seleção de perfil da criança
- **Configurações**: Gerenciamento de perfil, notificações e limites de tempo
- **Relatórios**: Análise detalhada com gráficos, estatísticas e filtros avançados
- **Tarefas**: Sistema completo de gerenciamento de tarefas com prioridades e status

### Características Técnicas
- Design responsivo para mobile e desktop
- Validação de formulários com mensagens de erro
- Navegação entre telas com Angular Router
- Estrutura preparada para integração com backend Java
- Mock data para demonstração das funcionalidades
- Componentes reutilizáveis e modulares

## Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Comandos
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
ng serve

# Compilar para produção
ng build

# Executar testes
ng test
```

A aplicação estará disponível em `http://localhost:4200`

## Integração com Backend

O frontend está preparado para integração com APIs REST Java:

### Modelos de Dados
- `Child`: Perfil da criança com permissões e estatísticas
- `Activity`: Atividades com categorização (estudo/diversão)
- `User`: Dados do usuário autenticado

### Serviços Implementados
- **`AuthService`**: Autenticação JWT, gerenciamento de sessão e permissões
- **`ChildService`**: CRUD completo de perfis de crianças com estatísticas
- **`ActivityService`**: Gerenciamento de atividades, relatórios e métricas
- **`AuthInterceptor`**: Interceptação automática de requisições HTTP para tokens
- **`AuthGuard`**: Proteção de rotas baseada em autenticação

### Endpoints Esperados
```
POST /api/auth/login
GET  /api/children
POST /api/children
GET  /api/activities
POST /api/activities
```

## Estrutura de Componentes

### Login Component
- Formulário reativo com validação
- Redirecionamento após autenticação
- Tratamento de erros de validação

### Dashboard Component
- Listagem de perfis das crianças
- Estatísticas de tempo de estudo/diversão
- Ações para visualizar relatórios e excluir perfis

### Add Child Component
- Formulário de cadastro com validações
- Checkboxes para permissões de atividades
- Navegação de volta ao dashboard

### Child Dashboard Component
- Interface amigável para crianças
- Lista de atividades do dia
- Botão para iniciar atividades

### Activity History Component
- Tabela de atividades com filtro por data
- Gráficos de tempo de estudo vs diversão
- Sidebar com perfil do usuário

### Profile Selector Component
- Seleção de perfil da criança
- Ilustração amigável
- Dropdown com opções de perfis

## Estilização

- SCSS customizado para cada componente
- Design system baseado no Figma fornecido
- Cores e tipografia consistentes
- Layout responsivo com breakpoints mobile-first
- Componentes visuais idênticos aos mockups

## Funcionalidades Implementadas Recentemente

### ✅ **Integração com Backend Java**
- **Serviços HTTP completos**: AuthService, ChildService, ActivityService
- **Configuração de ambiente**: Desenvolvimento e produção
- **Interceptor de autenticação**: Gerenciamento automático de tokens JWT
- **Guards de rota**: Proteção de rotas autenticadas
- **Tratamento de erros**: Fallback para dados mockados em caso de falha

### ✅ **Sistema de Autenticação**
- **Login com validação**: Integração com API de autenticação
- **Gerenciamento de sessão**: Persistência de usuário e token
- **Logout seguro**: Limpeza de dados de sessão
- **Estados de loading**: Indicadores visuais durante requisições
- **Mensagens de erro**: Feedback claro para o usuário

### ✅ **Melhorias na Interface**
- **Loading states**: Spinners e estados de carregamento
- **Tratamento de erros**: Mensagens de erro amigáveis
- **Validação aprimorada**: Feedback em tempo real
- **Responsividade**: Interface adaptável para todos os dispositivos

## Próximos Passos

1. Implementação de testes unitários
2. Implementação de notificações em tempo real
3. Otimizações de performance
4. Implementação de PWA (Progressive Web App)
5. Adição de métricas e analytics

## Desenvolvimento

Para executar o projeto localmente:

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute em modo desenvolvimento: `ng serve`
4. Acesse `http://localhost:4200`

## Desenvolvedor

Jackson Porciúncula