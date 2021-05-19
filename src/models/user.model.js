const conexion = require('../database/db');

const model = {};

model.listar = async (req, res) => {
	try {
		const sql = `SELECT u.nombre_usuario, p.nombre_peli FROM ver_usuarios vu
		INNER JOIN usuarios u
		ON vu.id_usuario = u.id
		INNER JOIN peliculas p
		ON vu.id_peli = p.id`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
