import { Link } from 'react-router-dom';
import '../styles/Error404.css';

export default function Error404() {
	return (
		<div className='container'>
			<h2 className='title'>ERREUR 404</h2>
			<p className='text'>
				La ressource que vous aviez demandée n'existe plus, <br />
				<Link to='/' className='link'>
					cliquez ici
				</Link>
				pour revenir a la page d'accueil.
			</p>
		</div>
	);
}
