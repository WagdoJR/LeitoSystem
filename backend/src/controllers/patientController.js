const Patient = require('../models/Patient');

exports.create = async (req, res) => {
  try {
    const { nome, cpf, dataNascimento, sexo, telefone } = req.body;

    // Validação básica
    if (!nome || !cpf || !dataNascimento || !sexo) {
      return res.status(400).json({
        message: 'Nome, CPF, data de nascimento e sexo são obrigatórios.'
      });
    }

    // Criar paciente
    const patient = await Patient.create({
      nome,
      cpf,
      dataNascimento,
      sexo,
      telefone
    });

    return res.status(201).json(patient);

  } catch (error) {
    console.error('ERRO AO CADASTRAR PACIENTE:', error);

    // CPF duplicado
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        message: 'Já existe um paciente com esse CPF.'
      });
    }

    return res.status(500).json({
      message: 'Erro ao cadastrar paciente',
      error: error.message
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
  console.error(' ERRO AO CADASTRAR PACIENTE:', error);

  return res.status(500).json({
    message: 'Erro ao cadastrar paciente',
    error: error.message
  });
}
};
