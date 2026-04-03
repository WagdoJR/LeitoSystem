require('dotenv').config();

const bcrypt = require('bcryptjs');
const sequelize = require('./config/database');
const User = require('./models/User');

async function seed() {
  try {
    await sequelize.sync();

    const email = 'admin@leitosystem.com';

    const usuarioExistente = await User.findOne({ where: { email } });

    if (usuarioExistente) {
      console.log('Usuário de teste já existe.');
      process.exit();
    }

    const senhaHash = await bcrypt.hash('123456', 10);

    await User.create({
      nome: 'Administrador',
      email,
      senha: senhaHash
    });

    console.log('Usuário de teste criado com sucesso.');
    console.log('Email: admin@leitosystem.com');
    console.log('Senha: 123456');
    process.exit();
  } catch (error) {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  }
}

seed();