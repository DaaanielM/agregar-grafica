const { createPool } = require('mysql');
const colors = require('colors');
const { promisify } = require('util');

const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'parcial_react',
});

pool.getConnection((error, connection) => {
	if (error) {
		console.error(error);
	} else {
		pool.releaseConnection(connection);
		console.log('DB conectada con éxito'.magenta);
	}
});

pool.query = promisify(pool.query);

module.exports = pool;
