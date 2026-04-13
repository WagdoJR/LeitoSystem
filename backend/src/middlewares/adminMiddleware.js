module.exports = (req, res, next) => {
  if (req.user.perfil !== 'admin') {
    return res.status(403).json({
      message: 'Acesso restrito a administradores.'
    });
  }

  next();
};