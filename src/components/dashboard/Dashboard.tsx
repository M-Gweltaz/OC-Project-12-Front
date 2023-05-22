import { JSX, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Greeting from './Greeting';
import DailyActivity from './DailyActivity';
import AverageSessions from './AverageSessions';
import Error404 from '../Error404';
import { fetchingData } from '../../services/api';
import { User } from '../../models/User';
import { UserActivity } from '../../models/UserActivity';
import { UserAverageSessions } from '../../models/UserAverageSessions';
import { UserPerformance } from '../../models/UserPerformance';
import '../../styles/dashboard/Dashboard.css';

export default function Dashboard(): JSX.Element {
	const [userData, setUserData] = useState<User>();
	const [userActivityData, setUserActivityData] = useState<UserActivity>();
	const [userAverageSessionsData, setAverageSessionsData] =
		useState<UserAverageSessions>();
	const [userPerformanceData, setUserPerformanceData] =
		useState<UserPerformance>();

	type userIdParams = {
		id: string;
	};
	const { id } = useParams<userIdParams>();

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				if (id !== undefined) {
					const data: {
						user: User;
						activity: UserActivity;
						averageSessions: UserAverageSessions;
						performance: UserPerformance;
					} = await fetchingData(id);
					setUserData(data.user);
					setUserActivityData(data.activity);
					setAverageSessionsData(data.averageSessions);
					setUserPerformanceData(data.performance);
				}
			} catch (error) {
				// Handle the error
			}
		};

		fetchData();
	}, [id]);

	return (
		<>
			{userData &&
			userActivityData &&
			userAverageSessionsData &&
			userPerformanceData ? (
				<>
					<Greeting user={userData} />
					<main className='dashboardContainer'>
						<DailyActivity activity={userActivityData} />
						<AverageSessions sessions={userAverageSessionsData} />
					</main>
				</>
			) : (
				<Error404 />
			)}
		</>
	);
}
