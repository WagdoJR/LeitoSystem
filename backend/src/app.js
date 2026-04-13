require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const bedRoutes = require('./routes/bedRoutes');

require('./models/User');
require('./models/Bed');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/beds', bedRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API do LeitoSystem funcionando.' });
});

const PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    console.log('Banco de dados conectado com sucesso.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar no banco:', error);
  });