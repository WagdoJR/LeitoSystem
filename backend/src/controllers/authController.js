const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
    nome: user.nome,
    perfil: user.perfil
  },
  process.env.JWT_SECRET,
  { expiresIn: '8h' }
);

    return res.status(200).json({
      message: 'Login realizado com sucesso.',
      token,
      usuario: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        perfil: user.perfil
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao realizar login.',
      error: error.message
    });
  }
};

const perfil = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'nome', 'email']
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao buscar perfil.',
      error: error.message
    });
  }
};

module.exports = {
  login,
  perfil
};