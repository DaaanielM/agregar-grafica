import React, { useEffect, useState } from 'react';
import '../../css/Listar.css';
import Titulo from './Titulo';
import Input from './Input';
import Buscar from './Buscar';
import { getListar } from '../../services/index';
function ListarComponent() {
	const [list, setList] = useState([]);
	useEffect(() => {
		async function loadList() {
			const consumir = await getListar();
			console.log(consumir);
			if (consumir.status === 200) {
				setList(consumir.data.datos);
			}
		}
		loadList();
	}, []);
	return (
		<div>
			<Titulo titulo='Busca tu pelicula favorita'></Titulo>
			<Input />
			<Buscar Text='Envíar' />
			{list.map((item) => (
				<table id='customers' key={item.id}>
					<tbody>
						<tr>
							<th>Nombre usuario</th>
							<th>Pelicula</th>
						</tr>
						<tr>
							<td>{item.nombre_usuario}</td>
							<td>{item.nombre_peli}</td>
						</tr>
					</tbody>
				</table>
			))}
		</div>
	);
}

export default ListarComponent;
