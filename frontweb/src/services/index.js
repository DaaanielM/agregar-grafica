import axios from 'axios';

export async function getListar() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/consulta/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getUser() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/consulta/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

// Trabajooooooooooooooooooooooooooooooooo
export async function getEmpleados() {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/empleado/listar`,
			method: 'get',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addEmpleado(form) {
	try {
		const respuesta = await axios({
			url: `http://localhost:4000/empleado/crear`,
			method: 'post',
			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

// export async function getEmpleado(id) {
// 	try {
// 		const respuesta = await axios({
// 			url: `http://localhost:4000/empleado/obtenerEmpleado/` + id,
// 			method: 'get',
// 		});
// 		return respuesta;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export async function updateEmpleado(form, id) {
// 	try {
// 		const respuesta = await axios({
// 			url: `http://localhost:4000/empleado/actualizar/` + id,
// 			method: 'put',
// 			data: form,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export async function deleteEmpleado(id) {
// 	try {
// 		const respuesta = await axios({
// 			url: `http://localhost:4000/empleado/eliminar/` + id,
// 			method: 'delete',
// 		});
// 		return respuesta;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export async function addEmpleado() {
// 	try {
// 		const respuesta = await axios.get(`http://localhost:4000/empleado/listar`)
// 		return respuesta;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
