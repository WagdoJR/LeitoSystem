const express = require('express');
const router = express.Router();

const controller = require('../controllers/bedController');

const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', authMiddleware, controller.listarLeitos);
router.post('/', authMiddleware, adminMiddleware, controller.criarLeito);
router.put('/:id', authMiddleware, adminMiddleware, controller.atualizarLeito);
router.delete('/:id', authMiddleware, adminMiddleware, controller.deletarLeito);

router.put('/:id/ocupar', authMiddleware, controller.ocupar);
router.put('/:id/liberar', authMiddleware, controller.liberar);


router.get('/dashboard', authMiddleware, controller.getDashboard);

module.exports = router;