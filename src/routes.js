import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao/indes';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/inicio';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function AppRouter(){
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao/>}>
						<Route index element={<Inicio/>}/>
						<Route path='cardapio' element={<Cardapio/>} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}