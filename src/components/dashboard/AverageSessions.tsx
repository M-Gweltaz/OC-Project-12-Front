import { JSX } from 'react';
import { UserAverageSessions } from '../../models/UserAverageSessions';
import {
	ResponsiveContainer,
	LineChart,
	XAxis,
	YAxis,
	Tooltip,
	Line,
} from 'recharts';
import '../../styles/dashboard/AverageSessions.css';

interface Props {
	sessions: UserAverageSessions;
}

export default function AverageSessions({ sessions }: Props): JSX.Element {
	console.log(sessions.sessions);
	// getAverageSessionsDayFormat();
	return (
		<>
			<article className='averageSessionsChartContainer'>
				<h2 className='averageSessionsChartTitle'>
					Durée moyenne des sessions
				</h2>
				<ResponsiveContainer
					minWidth={240}
					height='70%'
					minHeight={240}
					width='70%'
				>
					<LineChart width={220} height={220} data={sessions.sessions}>
						<XAxis dataKey='day' />
						<YAxis
							dataKey='sessionLength'
							unit='min'
							hide={true}
							domain={['dataMin - 10', 'dataMax + 10']}
						/>
						<Tooltip />
						<Line
							type='monotone'
							dataKey='sessionLength'
							stroke='#fff'
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</article>
		</>
	);
}
