const express = require('express');
const router = express.Router();

const {
  listarLeitos,
  criarLeito,
  atualizarLeito,
  deletarLeito
} = require('../controllers/bedController');

const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', authMiddleware, listarLeitos);
router.post('/', authMiddleware, adminMiddleware, criarLeito);
router.put('/:id', authMiddleware, adminMiddleware, atualizarLeito);
router.delete('/:id', authMiddleware, adminMiddleware, deletarLeito);

module.exports = router;