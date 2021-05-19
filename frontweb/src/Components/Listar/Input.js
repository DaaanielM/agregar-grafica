import React from 'react';

function Input() {
	return (
		<div>
			<input
				style={{
					padding: 10,
					width: 280,
					marginLeft: 20,
					marginBottom: 5,
					borderRadius: 15,
					border: 'none',
				}}
				placeholder='Buscar usuario'></input>
		</div>
	);
}

export default Input;
