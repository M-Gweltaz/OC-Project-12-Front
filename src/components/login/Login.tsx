import { JSX } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login/Login.css';

export default function Login(): JSX.Element {
	const mockedUser12Dashboard = '/dashboard/12';
	const mockedUser18Dashboard = '/dashboard/18';

	return (
		<>
			<div className='loginContainer'>
				<h2 className='loginTitle'>Fake Login</h2>
				<nav className='loginNavContainer'>
					<Link to={mockedUser12Dashboard} className='loginNav'>
						User 12 Dashboard
					</Link>
					<Link to={mockedUser18Dashboard} className='loginNav'>
						User 18 Dashboard
					</Link>
				</nav>
			</div>
		</>
	);
}
