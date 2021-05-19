import React from 'react';

function Titulo({ titulo }) {
	return (
		<div>
			<h1
				style={{
					marginLeft: 20,
					color: '#14A9C4',
					fontWeight: 'bold',
				}}>
				{titulo}
			</h1>
		</div>
	);
}

export default Titulo;
