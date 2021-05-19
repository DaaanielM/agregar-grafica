import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import Productos from '../screens/Productos';
import Listar from '../screens/Listar';
import Usuarios from '../screens/Usuarios';
import Navbar from '../Components/Navbar';
import List from '../screens/List';
import Crear from '../screens/Crear';
function Navigator() {
	return (
		<Router>
			<>
				<Navbar />
				<Switch>
					<Route path={'/Listar'} component={Listar}></Route>
					<Route path={'/Usuarios'} component={Usuarios}></Route>
					<Route path={'/List'} component={List}></Route>
					<Route path={'/Crear'} component={Crear}></Route>
				</Switch>
			</>
		</Router>
	);
}

export default Navigator;
