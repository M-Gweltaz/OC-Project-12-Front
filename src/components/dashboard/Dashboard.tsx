import { JSX, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Greeting from './Greeting';
import Error404 from '../Error404';
import { fetchingData } from '../../services/api';
import { User } from '../../models/User';
import { UserActivity } from '../../models/UserActivity';
import { UserAverageSessions } from '../../models/UserAverageSessions';
import { UserPerformance } from '../../models/UserPerformance';
import '../../styles/dashboard/Dashboard.css';

export default function Dashboard(): JSX.Element {
	const [userData, setUserData] = useState<{
		user: User;
		activity: UserActivity;
		averageSessions: UserAverageSessions;
		performance: UserPerformance;
	}>();

	type userIdParams = {
		id: string;
	};
	const { id } = useParams<userIdParams>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (id !== undefined) {
					const data = await fetchingData(id);
					setUserData(data);
				}
			} catch (error) {
				// Handle the error
			}
		};

		fetchData();
	}, [id]);

	return (
		<main className='dashboardContainer'>
			{userData ? <Greeting user={userData.user} /> : <Error404 />}
		</main>
	);
}
