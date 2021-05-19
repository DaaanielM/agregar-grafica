import React from 'react';
import { Link } from 'react-router-dom';

function Agregar() {
	return (
		<div className='container pt-4'>
			<div className='row'>
				<div className='colg-lg-6'>
					<div className='card text-center'>
						<div className='card-body'>
							<h3>Agregar empleado</h3>
							<form className='mt-4'>
								<div className='row'>
									<div className='col'>
										<input
											type='text'
											className='form-control form-control-lg'
											placeholder='Nombre'
										/>
									</div>
									<div className='col'>
										<input
											type='text'
											className='form-control form-control-lg'
											placeholder='Apellido'
										/>
									</div>
								</div>
								<input
									type='text'
									className='form-control form-control-lg mt-3'
									placeholder='Documento'
								/>
								<input
									type='text'
									className='form-control form-control-lg mt-3'
									placeholder='Salario'
								/>
								<div className='mt-3'>
									<Link to={'/List'}>
										<button
											type='text'
											className='btn btn-danger btn-lg mt-2 mx-3'>
											Cancelar
										</button>
									</Link>
									<button
										type='submit'
										className='btn btn-primary btn-lg mt-2'>
										Agregar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Agregar;
