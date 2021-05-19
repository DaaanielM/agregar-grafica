const express = require('express');
const router = express.Router();

const controller = require('../controllers/listar.controller');

router.get('/listar', controller.listar);

module.exports = router;
