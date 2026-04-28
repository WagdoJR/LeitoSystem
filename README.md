LeitoSystem

Sistema de gerenciamento de leitos hospitalares

Sobre o Projeto

O LeitoSystem é um sistema web desenvolvido com o objetivo de gerenciar leitos hospitalares de forma eficiente, organizada e transparente.

A aplicação permite autenticação de usuários, controle de leitos e pacientes, além da gestão de ocupação hospitalar.

Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) em Engenharia de Software.

Funcionalidades
Autenticação de usuários
Controle de acesso por perfil (admin)
Gestão de leitos (CRUD)
Gestão de pacientes (CRUD)
Ocupação de leitos com pacientes
Liberação de leitos
Filtros por setor e status
Indicadores visuais de status:
Disponível
Ocupado
Manutenção
Tecnologias Utilizadas
Backend
Node.js
Express
Sequelize (ORM)
PostgreSQL
JSON Web Token (JWT)
Bcrypt (criptografia de senha)
Frontend
React
Vite
Axios
React Router DOM
Arquitetura do Projeto

O sistema segue uma arquitetura full stack separada, dividida em:

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
Backend
API REST responsável pela autenticação e regras de negócio
Banco de dados PostgreSQL
Estrutura em camadas (controllers, models, routes, middlewares)
Relacionamento entre entidades (Leitos ↔ Pacientes)
Frontend
Interface em React
Consumo da API via Axios
Gerenciamento de rotas com React Router
Controle de sessão via localStorage
Funcionalidades Implementadas
Tela de login
Autenticação com JWT
Criptografia de senha com bcrypt
Proteção de rotas no backend
Dashboard inicial
Gestão completa de leitos:
Cadastro
Edição
Exclusão
Listagem
Filtros
Gestão de pacientes:
Cadastro
Listagem
Integração entre pacientes e leitos:
Ocupação de leito
Liberação de leito
Credenciais de Teste
Email: admin@leitosystem.com
Senha: 123456
Como executar o projeto
Pré-requisitos
Node.js instalado
NPM ou Yarn
PostgreSQL instalado
Backend
cd backend
npm install

Crie um arquivo .env dentro da pasta backend:

DB_NAME=leitosystem
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=sua_chave_secreta

Crie o banco de dados no PostgreSQL:

leitosystem

Execute o seed (cria usuário admin):

npm run seed

Inicie o backend:

npm run dev

A API será iniciada em:

http://localhost:3001
Frontend
cd frontend
npm install
npm run dev

A aplicação será iniciada em:

http://localhost:5173
Fluxo de Autenticação
O usuário insere e-mail e senha
O frontend envia a requisição para o backend
O backend valida as credenciais no banco de dados
A senha é verificada com bcrypt
Um token JWT é gerado
O token é armazenado no navegador (localStorage)
Rotas protegidas utilizam o token para autenticação
Banco de Dados

O sistema utiliza PostgreSQL como banco de dados relacional.

A conexão é feita via Sequelize ORM e as tabelas são criadas automaticamente.

Estrutura atual
Tabela: users
id
nome
email
senha
perfil
Tabela: patients
id
nome
cpf
dataNascimento
telefone
Tabela: beds
id
numero
setor
tipo
status
patientId (relacionamento com paciente)
Próximas Funcionalidades
Dashboard com indicadores em tempo real
Histórico de ocupação de leitos
Cadastro completo de internações
Controle de perfis (enfermagem, recepção)
Notificações de disponibilidade de leitos
Objetivo do Projeto

Desenvolver uma solução que auxilie instituições de saúde no gerenciamento de leitos, reduzindo gargalos, aumentando a eficiência operacional e melhorando a tomada de decisão.

Autor

Wagdo Junior, Windson e Diego
Estudantes de Engenharia de Software

Licença

Este projeto é de uso acadêmico.
