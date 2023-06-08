import { JSX } from 'react';
import {
	RadialBarChart,
	RadialBar,
	PolarAngleAxis,
	PolarGrid,
	ResponsiveContainer,
} from 'recharts';
import '../../styles/dashboard/DailyGoalChart.css';

interface Props {
	dailyGoal: { name: string; value: number }[];
}

export default function DailyGoalChart({ dailyGoal }: Props): JSX.Element {
	return (
		<>
			<article className='dailyGoalChartContainer'>
				<h2 className='dailyGoalChartTitle'>Score</h2>
				<div className='dailyGoalChartLegend'>
					<p className='dailyGoalChartLegendScore'>{dailyGoal[0].value}%</p>
					<p className='dailyGoalChartLegendText'>
						de votre <br />
						objectif
					</p>
				</div>

				<ResponsiveContainer
					minWidth={200}
					height='70%'
					minHeight={200}
					width='70%'
				>
					<RadialBarChart
						innerRadius={250}
						outerRadius={70}
						barSize={10}
						data={dailyGoal}
						startAngle={180}
						endAngle={-180}
						className='dailyGoalChartReversing'
					>
						<PolarAngleAxis
							type='number'
							domain={[0, 1]}
							angleAxisId={0}
							tick={false}
						/>
						<RadialBar dataKey='value' cornerRadius={5} fill='#FF0000' />
					</RadialBarChart>
				</ResponsiveContainer>
			</article>
		</>
	);
}
