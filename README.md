#  LeitoSystem

Sistema web para gerenciamento de leitos hospitalares.

---

##  Sobre o Projeto

O **LeitoSystem** é uma aplicação full stack desenvolvida com o objetivo de gerenciar leitos hospitalares de forma eficiente, organizada e transparente.

O sistema permite:
- Controle de leitos
- Gestão de pacientes
- Ocupação hospitalar em tempo real
- Visualização de métricas através de dashboard

Este projeto foi desenvolvido como parte do **Trabalho de Conclusão de Curso (TCC)** em Engenharia de Software.

---

##  Funcionalidades

###  Autenticação e Segurança
- Login com JWT
- Criptografia de senha com bcrypt
- Controle de acesso por perfil (admin)

###  Gestão de Leitos
- Cadastro de leitos
- Edição de leitos
- Exclusão de leitos
- Listagem com filtros por setor e status
- Status visual:
  -  Disponível
  -  Ocupado
  -  Manutenção

###  Gestão de Pacientes
- Cadastro de pacientes
- Listagem de pacientes
- Integração com leitos (ocupação/liberação)

###  Dashboard (Métricas)
- Total de leitos
- Leitos disponíveis
- Leitos ocupados
- Leitos em manutenção
- Taxa de ocupação (%)

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- JSON Web Token (JWT)
- Bcrypt

### Frontend
- React
- Vite
- Axios
- React Router DOM

---

##  Arquitetura do Projeto

LeitoSystem/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ └── config/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── services/
│ │ └── components/


### Backend
- API REST
- Regras de negócio
- Autenticação e autorização
- Integração com banco PostgreSQL

### Frontend
- Interface SPA com React
- Consumo da API via Axios
- Navegação com React Router

---

##  Funcionalidades Implementadas

- Tela de login
- Autenticação com JWT
- Proteção de rotas
- Dashboard com métricas
- CRUD completo de leitos
- CRUD de pacientes
- Ocupação e liberação de leitos
- Navegação entre páginas (Dashboard, Leitos, Pacientes)

---

##  Credenciais de Teste
Email: admin@leitosystem.com
Senha: 123456

## Como Executar o Projeto

### Pré-requisitos
- Node.js
- NPM ou Yarn
- PostgreSQL

---

##  Backend

bash
cd backend
npm install
crie um arquivo .env
DB_NAME=leitosystem
DB_USER=postgres
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=sua_chave_secreta

Crie o banco no PostgreSQL
leitosystem

Execute o seed
npm run seed

inicie o servidor
npm run dev

API disponível em:
http://localhost:3001

## Front
cd frontend
npm install
npm run dev

Aplicação disponível em:
http://localhost:5173

### Fluxo de Autenticação
Usuário insere email e senha
Frontend envia requisição para API
Backend valida credenciais
Senha é verificada com bcrypt
Token JWT é gerado
Token é armazenado no navegador
Rotas protegidas utilizam o token


## Banco de Dados

# Tabela: users
id
nome
email
senha
perfil

### Tabela: beds
id
numero
setor
tipo
status
patientId (relacionamento)

### Tabela: patients
id
nome
idade
documento
telefone


### Objetivo do Projeto

Desenvolver uma solução que auxilie instituições de saúde no gerenciamento de leitos, reduzindo gargalos, aumentando a eficiência operacional e melhorando a tomada de decisão.

### Autores
Wagdo Junior
Windson
Diego

Estudantes de Engenharia de Software

### Orientadores
Eduardo Dias Pereira
Vinicius Siqueira
Renato Luan

### Licença
Este projeto é de uso acadêmico.
