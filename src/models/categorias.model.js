const conexion = require('../database/db');

const model = {}


model.listar = async () => {
    try {
        const sql = "SELECT * FROM categorias";
        const resultados = await conexion.query(sql);
        return resultados;
    } catch (error) {
        console.log(error)
    }
}

module.exports = model;