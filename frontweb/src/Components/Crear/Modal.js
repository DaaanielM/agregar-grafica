import React, { useState } from 'react';
import { addEmpleado } from '../../services/index';

function Modal(props) {
	const { closeModal } = props;
	const [form, setForm] = useState({
		nombre: '',
		apellido: '',
		documento: '',
		salario: 0,
	});
	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};
	const submit = async (event) => {
		event.preventDefault();
		await addEmpleado(form);
		closeModal(true);
	};
	return (
		<div className='container pt-4'>
			<div className='row'>
				<div className='colg-lg-6'>
					<div className='card text-center'>
						<div className='card-body'>
							<h3>Agregar</h3>

							<span className='badge badge-danger text-danger'>
								TODOS LOS CAMPOS SON OBLIGATORIOS
							</span>
							<form className='mt-4' onSubmit={submit}>
								<div className='row'>
									<div className='col'>
										<input
											type='text'
											className='form-control form-control-lg'
											placeholder='Nombre'
											value={form.nombre}
											required
											onChange={(event) => {
												changeForm(
													'nombre',
													event.target.value
												);
											}}
										/>
									</div>
									<div className='col'>
										<input
											type='text'
											className='form-control form-control-lg'
											placeholder='Apellido'
											value={form.apellido}
											required
											onChange={(event) => {
												changeForm(
													'apellido',
													event.target.value
												);
											}}
										/>
									</div>
								</div>
								<input
									type='text'
									className='form-control form-control-lg mt-3'
									placeholder='Documento'
									value={form.documento}
									required
									onChange={(event) => {
										changeForm(
											'documento',
											event.target.value
										);
									}}
								/>
								<input
									type='number'
									className='form-control form-control-lg mt-3'
									placeholder='Salario'
									value={form.salario}
									required
									onChange={(event) => {
										changeForm(
											'salario',
											event.target.value
										);
									}}
								/>
								<div className='mt-3'>
									<button
										type='text'
										className='btn btn-danger btn-lg mt-2 mx-3'
										onClick={() => closeModal()}>
										Cancelar
									</button>
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

export default Modal;
