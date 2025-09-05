-- Script de inicialização do banco de dados
-- Este script é executado automaticamente quando o container PostgreSQL é criado

-- Criar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('PARENT', 'CHILD')),
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de crianças
CREATE TABLE IF NOT EXISTS children (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 1 AND age <= 18),
    avatar VARCHAR(255),
    allow_study BOOLEAN DEFAULT TRUE,
    allow_fun BOOLEAN DEFAULT TRUE,
    study_time_today VARCHAR(20) DEFAULT '0h 0m',
    fun_time_today VARCHAR(20) DEFAULT '0h 0m',
    parent_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de atividades
CREATE TABLE IF NOT EXISTS activities (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('STUDY', 'FUN')),
    duration VARCHAR(20) NOT NULL,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    child_id BIGINT REFERENCES children(id) ON DELETE CASCADE,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de tarefas
CREATE TABLE IF NOT EXISTS tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(20) NOT NULL CHECK (priority IN ('HIGH', 'MEDIUM', 'LOW')),
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'OVERDUE')),
    child_id BIGINT REFERENCES children(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de recompensas
CREATE TABLE IF NOT EXISTS rewards (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(10) NOT NULL,
    category VARCHAR(20) NOT NULL CHECK (category IN ('STUDY', 'BEHAVIOR', 'CHORES', 'SPECIAL')),
    status VARCHAR(20) NOT NULL CHECK (status IN ('AVAILABLE', 'EARNED', 'REDEEMED')),
    points_required INTEGER NOT NULL CHECK (points_required > 0),
    max_uses INTEGER NOT NULL DEFAULT 1 CHECK (max_uses > 0),
    current_uses INTEGER NOT NULL DEFAULT 0 CHECK (current_uses >= 0),
    child_id BIGINT REFERENCES children(id) ON DELETE SET NULL,
    earned_at TIMESTAMP,
    redeemed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar índices para performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_children_parent_id ON children(parent_id);
CREATE INDEX IF NOT EXISTS idx_activities_child_id ON activities(child_id);
CREATE INDEX IF NOT EXISTS idx_activities_date ON activities(date);
CREATE INDEX IF NOT EXISTS idx_tasks_child_id ON tasks(child_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_rewards_child_id ON rewards(child_id);
CREATE INDEX IF NOT EXISTS idx_rewards_status ON rewards(status);

-- Inserir dados de exemplo
INSERT INTO users (name, email, password, role) VALUES
('João Silva', 'joao@example.com', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iKTVEFDi', 'PARENT'),
('Maria Silva', 'maria@example.com', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iKTVEFDi', 'PARENT')
ON CONFLICT (email) DO NOTHING;

-- Inserir crianças de exemplo
INSERT INTO children (name, age, parent_id, study_time_today, fun_time_today) VALUES
('Sofia Silva', 8, 1, '2h 30m', '1h 15m'),
('Lucas Silva', 10, 1, '3h 45m', '2h 00m'),
('Isabela Silva', 6, 2, '1h 45m', '45m')
ON CONFLICT DO NOTHING;

-- Inserir atividades de exemplo
INSERT INTO activities (name, type, duration, child_id, date) VALUES
('Matemática', 'STUDY', '1h 30m', 1, CURRENT_DATE),
('Videogame', 'FUN', '45m', 1, CURRENT_DATE),
('Português', 'STUDY', '2h 00m', 2, CURRENT_DATE),
('Desenho', 'FUN', '1h 15m', 2, CURRENT_DATE)
ON CONFLICT DO NOTHING;

-- Inserir tarefas de exemplo
INSERT INTO tasks (title, description, priority, status, child_id) VALUES
('Fazer lição de casa', 'Completar exercícios de matemática', 'HIGH', 'PENDING', 1),
('Ler livro', 'Ler 30 minutos por dia', 'MEDIUM', 'IN_PROGRESS', 1),
('Organizar quarto', 'Arrumar brinquedos e roupas', 'LOW', 'COMPLETED', 2)
ON CONFLICT DO NOTHING;

-- Inserir recompensas de exemplo
INSERT INTO rewards (title, description, icon, category, status, points_required, max_uses) VALUES
('Pizza no final de semana', 'Escolher o sabor da pizza para o jantar de sábado', '🍕', 'STUDY', 'AVAILABLE', 200, 1),
('1 hora extra de videogame', 'Jogar videogame por 1 hora a mais no domingo', '🎮', 'BEHAVIOR', 'AVAILABLE', 150, 2),
('Livro novo', 'Escolher um livro novo na livraria', '📚', 'STUDY', 'AVAILABLE', 300, 1)
ON CONFLICT DO NOTHING;
