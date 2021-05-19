import React from 'react';

function Botton({ text }) {
	return (
		<div>
			<button
				style={{
					color: '#16A7D6',
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
				{text}
			</button>
		</div>
	);
}

export default Botton;
