import { JSX } from 'react';
import '../styles/NavBar.css';

export default function NavBar(): JSX.Element {
	return (
		<>
			<nav className='navBarContainer'>
				<ul className='navBarList'>
					<li className='navBarItem'>Accueil</li>
					<li className='navBarItem'>Profil</li>
					<li className='navBarItem'>Réglage</li>
					<li className='navBarItem'>Communauté</li>
				</ul>
			</nav>
		</>
	);
}
