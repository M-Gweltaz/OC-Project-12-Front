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
						<XAxis
							dataKey='day'
							hide={true}
							padding={{ left: -5, right: -5 }}
							tick={{ fill: '#fff' }}
						/>
						<YAxis
							dataKey='sessionLength'
							unit='min'
							hide={true}
							domain={['dataMin - 10', 'dataMax + 10']}
						/>
						<Tooltip
							labelFormatter={() => ''}
							formatter={(value) => [`${value} min`]}
							contentStyle={{
								backgroundColor: '#FFF',
								padding: '0.5em 0.5em',
							}}
							itemStyle={{
								color: '#000',
								fontSize: '0.438em',
								lineHeight: '1.5em',
							}}
						/>
						<Line
							type='monotone'
							dataKey='sessionLength'
							stroke='#fff'
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
				<ul className='averageSessionsChartXAxisTick'>
					<li>L</li>
					<li>M</li>
					<li>M</li>
					<li>J</li>
					<li>V</li>
					<li>S</li>
					<li>D</li>
				</ul>
			</article>
		</>
	);
}
