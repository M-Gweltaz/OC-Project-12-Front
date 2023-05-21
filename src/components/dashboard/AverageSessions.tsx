import { JSX } from 'react';
import { UserAverageSessions } from '../../models/UserAverageSessions';
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
} from 'recharts';
import '../../styles/dashboard/AverageSessions.css';

interface Props {
	sessions: UserAverageSessions;
}

export default function AverageSessions({ sessions }: Props): JSX.Element {
	console.log(sessions.sessions);
	return (
		<>
			<article className='averageSessionsChartContainer'>
				<h2 className='averageSessionsChartTitle'>
					Durée moyenne des sessions
				</h2>
				<ResponsiveContainer
					minWidth={200}
					height='70%'
					minHeight={200}
					width='70%'
				>
					<LineChart
						width={250}
						height={250}
						data={sessions.sessions}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='day' />
						<YAxis dataKey='sessionLength' />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='sessionLength' stroke='#8884d8' />
					</LineChart>
				</ResponsiveContainer>
			</article>
		</>
	);
}
