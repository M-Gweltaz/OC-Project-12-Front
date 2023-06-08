import { Link } from 'react-router-dom';
import '../../styles/error/Error500.css';

export default function Error500() {
	return (
		<div className='container'>
			<h2 className='title'>ERREUR 500</h2>
			<p className='text'>
				Nous rencontrons un problème pour récupérer vos données,
				<br />
				<Link to='/' className='link'>
					cliquez ici
				</Link>
				pour revenir a la page d'accueil.
			</p>
		</div>
	);
}
