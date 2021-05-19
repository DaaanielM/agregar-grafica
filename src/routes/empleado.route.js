const express = require('express');
const router = express.Router();

const controller = require('../controllers/empleado.controller');

// APP WEB

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.get('/obtenerEmpleado/:id', controller.obtenerEmpleado);
router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;
