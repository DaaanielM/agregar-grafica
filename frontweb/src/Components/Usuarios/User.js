import React, { useEffect, useState } from 'react';
import { getUser } from '../../services';

function User() {
	const [user, setUser] = useState([]);
	useEffect(() => {
		async function loadUsers() {
			const consultar = await getUser();
			console.log(consultar);
			if (consultar.status === 200) {
				setUser(consultar.data.datos);
			}
		}
		loadUsers();
	}, []);
	return (
		<>
			{user.map((item) => (
				<div key={item.id}>
					<p
						style={{
							marginLeft: 20,
							color: '#16A7D6',
							fontWeight: 'bold',
						}}>
						{item.nombre_usuario}
					</p>
				</div>
			))}
		</>
	);
}

export default User;
