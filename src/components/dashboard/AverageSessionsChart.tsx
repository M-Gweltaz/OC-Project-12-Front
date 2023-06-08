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

import '../../styles/dashboard/AverageSessionsChart.css';

interface Props {
	sessions: UserAverageSessions;
}

export default function AverageSessionsChart({ sessions }: Props): JSX.Element {
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
					<LineChart data={sessions.sessions}>
						<defs>
							<linearGradient
								id='linearGradient'
								x1='100%'
								y1='0'
								x2='0'
								y2='0'
							>
								<stop offset='0%' stopColor='#FFFFFF' stopOpacity={1} />
								<stop offset='100%' stopColor='#FFFFFF' stopOpacity={0.4} />
							</linearGradient>
						</defs>
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
							domain={['dataMin - 15', 'dataMax + 15']}
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
							strokeWidth={2}
							dot={false}
							stroke='url(#linearGradient)'
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
