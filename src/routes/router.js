const router = require('express').Router();

// router.use('/ejemplo', require('../routes/ejemplo.route'));

router.use('/categorias', require('../routes/categorias.route'));

router.use('/consulta', require('./listar.route'));

router.use('/empleado', require('../routes/empleado.route'));

module.exports = router;

// xd
