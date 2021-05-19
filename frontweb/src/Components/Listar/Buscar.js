import React from 'react';

function Buscar({ Text }) {
	return (
		<div>
			<button
				style={{
					color: '#16D65F',
					padding: 10,
					width: 280,
					marginLeft: 20,
					marginBottom: 10,
					border: 'none',
					borderRadius: 15,
					textTransform: 'uppercase',
					fontWeight: 'bold',
				}}
				type='submit'>
				{Text}
			</button>
		</div>
	);
}

export default Buscar;
