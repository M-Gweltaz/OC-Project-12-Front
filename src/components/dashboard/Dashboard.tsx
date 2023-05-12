import { JSX } from 'react';
import { useParams } from 'react-router-dom';
import Greeting from './Greeting';
import '../../styles/dashboard/Dashboard.css';

export default function Dashboard(): JSX.Element {
	type userIdParams = {
		id: string;
	};
	const { id } = useParams<userIdParams>();

	return (
		<main className='dashboardContainer'>
			<Greeting />
		</main>
	);
}
