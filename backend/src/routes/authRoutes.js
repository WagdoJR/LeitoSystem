const express = require('express');
const router = express.Router();

const { login, perfil } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', login);
router.get('/perfil', authMiddleware, perfil);

module.exports = router;