const express = require('express');
const router = express.Router();

const controller = require('../controllers/categorias.controller');

// APP WEB

router.get('/listar', controller.listar);


module.exports = router;