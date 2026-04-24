# LeitoSystem

Sistema de gerenciamento de leitos hospitalares

## Sobre o Projeto

O LeitoSystem é um sistema web desenvolvido com o objetivo de gerenciar leitos hospitalares de forma eficiente, organizada e transparente.

A aplicação permite autenticação de usuários e será expandida para controle de leitos, pacientes e ocupação hospitalar.

Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) em Engenharia de Software.

## Funcionalidades

* Autenticação de usuários
* Controle de acesso por perfil
* Cadastro de leitos
* Edição de leitos
* Exclusão de leitos
* Listagem de leitos
* Filtros por setor e status
* Indicadores visuais de status:

  * Disponível
  * Ocupado
  * Manutenção

## Tecnologias Utilizadas

### Backend

* Node.js
* Express
* Sequelize (ORM)
* PostgreSQL
* JSON Web Token (JWT)
* Bcrypt (criptografia de senha)

### Frontend

* React
* Vite
* Axios
* React Router DOM

## Arquitetura do Projeto

O sistema segue uma arquitetura full stack separada, dividida em:

```
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
```

### Backend

* API REST responsável pela autenticação e regras de negócio
* Banco de dados PostgreSQL
* Estrutura em camadas (controllers, models, routes, middlewares)

### Frontend

* Interface em React
* Consumo da API via Axios
* Gerenciamento de rotas com React Router

## Funcionalidades Implementadas

* Tela de login
* Autenticação com JWT
* Criptografia de senha com bcrypt
* Proteção de rotas no backend
* Dashboard com dados do usuário autenticado
* Gestão completa de leitos (CRUD)

## Credenciais de Teste

```
Email: admin@leitosystem.com
Senha: 123456
```

## Como executar o projeto

### Pré-requisitos

* Node.js instalado
* NPM ou Yarn
* PostgreSQL instalado

### Backend

```
cd backend
npm install
```

Crie um arquivo `.env` dentro da pasta backend:

```
DB_NAME=leitosystem
DB_USER=postgres
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=
```

Crie o banco de dados no PostgreSQL com o nome:

```
leitosystem
```

Execute o seed:

```
npm run seed
```

Inicie o backend:

```
npm run dev
```

A API será iniciada em:

```
http://localhost:3001
```

---

### Frontend

```
cd frontend
npm install
npm run dev
```

A aplicação será iniciada em:

```
http://localhost:5173
```

## Fluxo de Autenticação

1. O usuário insere e-mail e senha
2. O frontend envia a requisição para o backend
3. O backend valida as credenciais no banco de dados
4. A senha é verificada com bcrypt
5. Um token JWT é gerado
6. O token é armazenado no navegador (localStorage)
7. Rotas protegidas utilizam o token para autenticação

## Banco de Dados

O sistema utiliza PostgreSQL como banco de dados relacional, executado em servidor local.

A conexão é realizada através do Sequelize ORM.

As tabelas são criadas automaticamente ao iniciar o sistema ou executar o seed.

### Estrutura atual

#### Tabela: users

* id
* nome
* email
* senha
* perfil

#### Tabela: beds

* id
* numero
* setor
* tipo
* status

---

## Próximas Funcionalidades

* Cadastro de pacientes
* Ocupação e liberação de leitos
* Dashboard com indicadores
* Controle de níveis de acesso (admin, enfermagem, recepção)

## Objetivo do Projeto

Desenvolver uma solução que auxilie instituições de saúde no gerenciamento de leitos, reduzindo gargalos, aumentando a eficiência operacional e melhorando a tomada de decisão.

## Autor

Wagdo Junior, Windson e Diego
Estudantes de Engenharia de Software

## Licença

Este projeto é de uso acadêmico.
