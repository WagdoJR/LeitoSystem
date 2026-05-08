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

##  Tecnologias Utilizadas

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

##  Como executar o projeto

###  Pré-requisitos

- Node.js instalado
- NPM ou Yarn
- PostgreSQL instalado

---

##  Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` dentro da pasta **backend**:

```env
DB_NAME=leitosystem
DB_USER=postgres
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=sua_chave_secreta
```

Crie o banco de dados no PostgreSQL:

```bash
leitosystem
```

Execute o seed:

```bash
npm run seed
```

Inicie o servidor:

```bash
npm run dev
```

API disponível em:

```
http://localhost:3001
```

---

##  Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

##  Fluxo de Autenticação

1. O usuário insere e-mail e senha  
2. O frontend envia a requisição para o backend  
3. O backend valida as credenciais no banco de dados  
4. A senha é verificada com bcrypt  
5. Um token JWT é gerado  
6. O token é armazenado no navegador (localStorage)  
7. Rotas protegidas utilizam o token para autenticação  

---

##  Banco de Dados

O sistema utiliza PostgreSQL como banco de dados relacional.

###  Tabela: users

- id  
- nome  
- email  
- senha  
- perfil  

###  Tabela: beds

- id  
- numero  
- setor  
- tipo  
- status  
- patientId (relacionamento)  


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
