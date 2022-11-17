import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Prato from 'pages/Cardapio/Prato';
import Inicio from 'pages/inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function AppRouter(){
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao/>}>
						<Route index element={<Inicio/>}/>
						<Route path='cardapio' element={<Cardapio/>} />
						<Route path='sobre' element={<Sobre/>} />
					</Route>
					<Route path='prato/:id' element={<Prato/>} />
					<Route path='*' element={<NotFound/>}/>
				</Routes>
				<Footer/>
			</Router>
		</main>
	);
}