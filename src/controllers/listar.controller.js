const model = require('../models/listar.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const resultados = await model.listar();
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje: 'Hay un error, contacte con el admin',
			error: true,
		});
	}
};

controller.agg = async (req, res) => {
	try {
		const id = req.params.id;
		const datos = {
			nombre_usuario: req.body.nombre_usuario,
		};
		await model.agg(datos, id);
		res.json({
			mensaje: 'Elemento actualizado correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error contacte con el admin',
			error: true,
		});
	}
};
module.exports = controller;
