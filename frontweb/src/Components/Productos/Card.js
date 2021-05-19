import React from 'react';
import pc from '../../Images/pc.jpg';
import '../../css/Card.css';
function Card() {
	return (
		<div className='mainhg'>
			<div className='cardhg'>
				<img
					// src={'http://localhost:4000/img/' + item.foto}
					src={pc}
					alt=''
					className='imghg'
				/>

				<h2 className='nombrehg'>PC Gamer</h2>
				<p className='descripcionhg'>RTX 2080TI, 8gb, i7, 500ssd</p>
				<p className='preciohg'>
					<span className='dolar'>$</span>
					6000
				</p>
				<button type='submit' className='agregarhg'>
					Agregar
				</button>
			</div>
		</div>
	);
}

export default Card;
