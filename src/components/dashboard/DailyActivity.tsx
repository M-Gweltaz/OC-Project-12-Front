import { JSX } from 'react';
import { UserActivity } from '../../models/UserActivity';
import {
	ResponsiveContainer,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
} from 'recharts';
import '../../styles/dashboard/DailyActivity.css';

interface Props {
	activity: UserActivity;
}

export default function DailyActivity({ activity }: Props): JSX.Element {
	const data: { day: number; kilogram: number; calories: number }[] =
		activity.getActivityBarChartData();

	const getMaxValue: number = data.reduce(
		(
			max: number,
			current: { day: number; kilogram: number; calories: number }
		): number => {
			return current.kilogram > max ? current.kilogram : max;
		},
		0
	);

	const getMinValue: number = data.reduce(
		(
			min: number,
			current: { day: number; kilogram: number; calories: number }
		): number => {
			return current.kilogram < min ? current.kilogram : min;
		},
		getMaxValue
	);

	const yTickValues: [number, number, number] = [
		getMinValue - 1,
		(getMaxValue + getMinValue) / 2,
		getMaxValue + 1,
	];

	return (
		<article className='activityChartContainer'>
			<h2 className='activityChartTitle'>Activité quotidienne</h2>
			<ResponsiveContainer minWidth={500} height='70%' minHeight={220}>
				<BarChart
					data={data}
					margin={{ top: 20, right: 15, bottom: 15, left: 15 }}
					barGap={10}
					barSize={7}
				>
					<CartesianGrid strokeDasharray='3 3' vertical={false} />
					<XAxis
						dataKey='day'
						tickSize={0}
						tickMargin={20}
						tick={{ fill: '#9B9EAC' }}
					/>
					<YAxis
						orientation='right'
						dataKey='kilogram'
						domain={['dataMin - 1', 'dataMax + 1']}
						tick={{ fill: '#9B9EAC' }}
						tickCount={3}
						ticks={yTickValues}
						axisLine={false}
						tickLine={{ stroke: 'none' }}
						scale='linear'
						tickMargin={20}
					/>
					<YAxis
						yAxisId='left'
						dataKey='calories'
						domain={['dataMin - 40', 'dataMax + 40']}
						hide={true}
						tickCount={0}
					/>
					<Tooltip
						viewBox={{ x: 0, y: 0, width: 400, height: 800 }}
						labelFormatter={() => ''}
						formatter={(value, name, props) => [
							value,
							props.payload.unit,
							name,
						]}
						contentStyle={{
							backgroundColor: '#FF0000',
							padding: '0.5em 0.5em',
						}}
						itemStyle={{
							color: '#FFFFFF',
							fontSize: '0.438em',
							lineHeight: '1.5em',
						}}
					/>
					<Legend
						verticalAlign='top'
						align='right'
						height={50}
						iconType='circle'
						iconSize={8}
						formatter={(value) => (
							<span
								style={{
									color: '#74798C',
									margin: '0 1em 0 1em',
									fontSize: '0.8em',
								}}
							>
								{value}
							</span>
						)}
					/>
					<Bar
						dataKey='kilogram'
						name='Poids (kg)'
						unit='kg'
						radius={[10, 10, 0, 0]}
						fill='#282D30'
					/>
					<Bar
						dataKey='calories'
						yAxisId='left'
						name='Calories brûlées (kCal)'
						unit='Kcal'
						radius={[10, 10, 0, 0]}
						fill='#E60000'
					/>
				</BarChart>
			</ResponsiveContainer>
		</article>
	);
}
