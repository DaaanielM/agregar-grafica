import React, { useEffect, useRef, useState } from 'react';
import { getEmpleados } from '../../services';
import { Modal } from 'react-bulma-components';
import FormModal from '../Crear/Modal';
import { Bar, Doughnut, PolarArea, Radar } from 'react-chartjs-2';

function Table() {
	const [listar, setListar] = useState([]);
	const [modal, setModal] = useState(false);
	const [dataChart, setDataChart] = useState({});
	const OpenModal = () => {
		setModal(true);
	};
	const CloseModal = (result) => {
		if (result) {
			loadListarxd();
		}
		setModal(false);
	};
	async function loadListarxd() {
		//arreglos
		const salUser = [];
		const cantidad = [];
		const docUser = [];

		// api
		const cls = await getEmpleados();
		console.log(cls);
		if (cls.status === 200) {
			setListar(cls.data.datos);
		}
		// traer datos especificos
		for (const salary of cls.data.datos) {
			salUser.push(parseInt(salary.salario));
			cantidad.push(salary.nombre);
			docUser.push(salary.documento);
		}

		// mostrar en consola los datos
		console.log(salUser);
		console.log(cantidad);
		console.log(docUser);

		// agregamos el cuerpo de nuestra grafica y sus datos.
		setDataChart({
			labels: cantidad,
			datasets: [
				{
					label: 'Salario usuario',
					data: salUser,
					backgroundColor: [
						'rgba(255, 99, 132, 0.8)',
						'rgba(54, 162, 235, 0.8)',
						'rgba(255, 206, 86, 0.8)',
						'rgba(75, 192, 192, 0.8)',
						'rgba(153, 102, 255, 0.8)',
						'rgba(255, 159, 64, 0.8)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
				{
					label: 'Documento usuario',
					data: docUser,
					backgroundColor: [
						'rgba(153, 102, 255, 0.8)',
						'rgba(255, 206, 86, 0.8)',
						'rgba(75, 192, 192, 0.8)',
						'rgba(255, 159, 64, 0.8)',
						'rgba(255, 99, 132, 0.8)',
						'rgba(54, 162, 235, 0.8)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			],
		});
	}

	// Ejecutamos nuestra función loadListarxd
	useEffect(() => {
		loadListarxd();
	}, []);

	const myRef = useRef();

	return (
		<div className='container mt-4'>
			<div className='card'>
				<div className='card-body'>
					<span className='h3'>Listado de empleados</span>

					<table className='table table-striped mt-5'>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Documento</th>
								<th>Salario</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{listar.map((item) => (
								<tr key={item.id}>
									<td>{item.nombre}</td>
									<td>{item.documento}</td>
									<td>{item.salario}</td>
									<td>
										<i className='fas fa-edit mx-2 text-info'></i>
										<i className='fas fa-trash-alt mx-2 text-danger'></i>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					{/* Aquí va el boton  */}
					<button
						onClick={OpenModal}
						className='btn btn-success btn-lg m-auto w-100'>
						Agregar
					</button>

					{/* Grafica*/}
					<Bar
						ref={myRef}
						data={dataChart}
						width={200}
						height={100}
					/>
				</div>
			</div>
			{/* Aquí va el modal */}
			<Modal show={modal} onClose={CloseModal}>
				<Modal.Content>
					<FormModal closeModal={CloseModal} />
				</Modal.Content>
			</Modal>
		</div>
	);
}

export default Table;
