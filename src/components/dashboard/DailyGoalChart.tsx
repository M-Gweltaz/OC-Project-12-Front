import { JSX } from 'react';
import {
	RadialBarChart,
	RadialBar,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import '../../styles/dashboard/DailyGoalChart.css';

interface Props {
	dailyGoal: { todayScore: number }[];
}

export default function DailyGoalChart({ dailyGoal }: Props): JSX.Element {
	console.log(dailyGoal);
	return (
		<>
			<article className='dailyGoalChartContainer'>
				<h2 className='dailyGoalChartTitle'>Score</h2>
				<ResponsiveContainer
					minWidth={200}
					height='70%'
					minHeight={200}
					width='70%'
				>
					<RadialBarChart data={dailyGoal} startAngle={180} endAngle={0}>
						<RadialBar dataKey='todayScore' />
						<Legend
							iconSize={10}
							width={120}
							height={140}
							layout='vertical'
							verticalAlign='middle'
							align='right'
						/>
						<Tooltip />
					</RadialBarChart>
				</ResponsiveContainer>
			</article>
		</>
	);
}
