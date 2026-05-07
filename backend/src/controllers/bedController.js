const Bed = require('../models/Bed');

const listarLeitos = async (req, res) => {
  try {
    const beds = await Bed.findAll({
      order: [['id', 'DESC']]
    });

    return res.status(200).json(beds);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao listar leitos.',
      error: error.message
    });
  }
};

const criarLeito = async (req, res) => {
  try {
    const { numero, setor, tipo, status } = req.body;

    if (!numero || !setor || !tipo) {
      return res.status(400).json({
        message: 'Número, setor e tipo são obrigatórios.'
      });
    }

    const leitoExistente = await Bed.findOne({ where: { numero } });

    if (leitoExistente) {
      return res.status(400).json({
        message: 'Já existe um leito com esse número.'
      });
    }

    const novoLeito = await Bed.create({
      numero,
      setor,
      tipo,
      status: status || 'disponivel'
    });

    return res.status(201).json({
      message: 'Leito cadastrado com sucesso.',
      bed: novoLeito
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao cadastrar leito.',
      error: error.message
    });
  }
};

const atualizarLeito = async (req, res) => {
  try {
    const { id } = req.params;
    const { numero, setor, tipo, status } = req.body;

    const bed = await Bed.findByPk(id);

    if (!bed) {
      return res.status(404).json({
        message: 'Leito não encontrado.'
      });
    }

    await bed.update({
      numero,
      setor,
      tipo,
      status
    });

    return res.status(200).json({
      message: 'Leito atualizado com sucesso.',
      bed
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao atualizar leito.',
      error: error.message
    });
  }
};

const deletarLeito = async (req, res) => {
  try {
    const { id } = req.params;

    const bed = await Bed.findByPk(id);

    if (!bed) {
      return res.status(404).json({
        message: 'Leito não encontrado.'
      });
    }

    await bed.destroy();

    return res.status(200).json({
      message: 'Leito removido com sucesso.'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao deletar leito.',
      error: error.message
    });
  }
};

const ocupar = async (req, res) => {
  try {
    const { patientId } = req.body;

    const bed = await Bed.findByPk(req.params.id);

    if (!bed) {
      return res.status(404).json({ message: 'Leito não encontrado' });
    }

    bed.status = 'ocupado';
    bed.patientId = patientId;

    await bed.save();

    res.json(bed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const liberar = async (req, res) => {
  try {
    const bed = await Bed.findByPk(req.params.id);

    if (!bed) {
      return res.status(404).json({ message: 'Leito não encontrado' });
    }

    bed.status = 'disponivel';
    bed.patientId = null;

    await bed.save();

    res.json(bed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDashboard = async (req, res) => {
  try {
    const total = await Bed.count();

    const disponiveis = await Bed.count({
      where: { status: 'disponivel' }
    });

    const ocupados = await Bed.count({
      where: { status: 'ocupado' }
    });

    const manutencao = await Bed.count({
      where: { status: 'manutencao' }
    });

    const taxaOcupacao =
      total > 0 ? ((ocupados / total) * 100).toFixed(2) : 0;

    return res.json({
      total,
      disponiveis,
      ocupados,
      manutencao,
      taxaOcupacao
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao carregar dashboard',
      error: error.message
    });
  }
};

module.exports = {
  listarLeitos,
  criarLeito,
  atualizarLeito,
  deletarLeito,
  ocupar,
  liberar,
  getDashboard
};