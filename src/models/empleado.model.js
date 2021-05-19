const conexion = require('../database/db');

const model = {};

model.listar = async (req, res) => {
	try {
		const sql = `SELECT * FROM empleado`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = `INSERT INTO empleado SET ?`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE empleado SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.obtenerEmpleado = async (id) => {
	try {
		const sql = `SELECT * FROM empleado WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		const sql = `DELETE FROM empleado WHERE id = ${id}`;
		const resultados = await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

// model.crear = async (datos) => {
//     try {
//         const sql = `INSERT INTO ejemplo SET ?`;
//         await conexion.query(sql,datos);
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = model;
