# LeitoSystem

Sistema de gerenciamento de leitos hospitalares

## Sobre o Projeto

O LeitoSystem é um sistema web desenvolvido com o objetivo de gerenciar leitos hospitalares de forma eficiente, organizada e transparente.

A aplicação permite autenticação de usuários e será expandida para controle de leitos, pacientes e ocupação hospitalar.

Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) em Engenharia de Software.

## Tecnologias Utilizadas

### Backend

* Node.js
* Express
* Sequelize (ORM)
* SQLite
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
├── backend/
└── frontend/
```

### Backend

* API REST responsável pela autenticação e regras de negócio
* Banco de dados SQLite
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


## Credenciais de Teste

```
Email: admin@leitosystem.com
Senha: 123456
```


## Como executar o projeto

### Pré-requisitos

* Node.js instalado
* NPM ou Yarn


### Backend

```
cd backend
npm install
npm run seed
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

O banco utilizado é o SQLite, sendo criado automaticamente no backend:

```
backend/database.sqlite
```

Tabela atual:

* users

  * id
  * nome
  * email
  * senha

---

## Próximas Funcionalidades

* Cadastro de leitos
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
