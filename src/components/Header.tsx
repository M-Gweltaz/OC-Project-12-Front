import { JSX } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import NavBar from './NavBar.tsx';

export default function Header(): JSX.Element {
	return (
		<header className='header'>
			<img src={logo} alt='sportsee logo' />
			<h1 className='headerName'>SportSee</h1>
			<NavBar />
		</header>
	);
}
