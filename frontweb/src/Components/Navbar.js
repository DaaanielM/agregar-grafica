import React from 'react';
import pc from '../Images/avatar.png';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<>
			<nav
				className='navbar'
				role='navigation'
				aria-label='main navigation'>
				<div className='navbar-brand'>
					<Link className='navbar-item' href='https://bulma.io'>
						<img src={pc} width='30' alt='Cargando... xd' />
					</Link>
					<Link
						role='button'
						className='navbar-burger'
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'>
						<span aria-hidden='true' />
						<span aria-hidden='true' />
						<span aria-hidden='true' />
					</Link>
				</div>
				<div id='navbarBasicExample' className='navbar-menu'>
					<div className='navbar-start'>
						<Link to={'/Listar'} className='navbar-item'>
							Listar
						</Link>
						<Link to={'/Usuarios'} className='navbar-item'>
							Usuarios
						</Link>
						<div className='navbar-item has-dropdown is-hoverable'>
							<Link className='navbar-link'>Crud</Link>
							<div className='navbar-dropdown'>
								<Link to={'/List'} className='navbar-item'>
									Listar
								</Link>
								<Link to={'/Crear'} className='navbar-item'>
									Crear
								</Link>
								<Link className='navbar-item'>Actualizar</Link>
								<hr className='navbar-divider' />
								<Link className='navbar-item'>
									Report an issue
								</Link>
							</div>
						</div>
					</div>
					<div className='navbar-end'>
						<div className='navbar-item'>
							<div className='buttons'>
								<Link className='button is-primary'>
									<strong>Sign up</strong>
								</Link>
								<Link className='button is-light'>Log in</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
