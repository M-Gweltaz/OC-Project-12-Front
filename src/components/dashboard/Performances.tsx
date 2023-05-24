import { JSX } from 'react';
import { UserPerformance } from '../../models/UserPerformance';
import {
	ResponsiveContainer,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
} from 'recharts';
import '../../styles/dashboard/Perfomances.css';

interface Props {
	performance: UserPerformance;
}

export default function Performances({ performance }: Props): JSX.Element {
	const getMaxValue = (): number => {
		let maxValue = 0;
		performance.performances.forEach((data) => {
			if (data.value > maxValue) {
				maxValue = data.value;
			}
		});
		return maxValue;
	};

	return (
		<>
			<article className='performancesChartContainer'>
				<ResponsiveContainer
					minWidth={200}
					height='70%'
					minHeight={200}
					width='70%'
				>
					<RadarChart outerRadius={60} data={performance.performances}>
						<PolarGrid />
						<PolarAngleAxis
							dataKey='sport'
							tickLine={false}
							axisLine={{ stroke: '#FFFFFF' }}
							tick={{
								fill: '#FFFFFF',
								fontSize: 10,
							}}
						/>
						<PolarRadiusAxis
							angle={30}
							domain={[0, getMaxValue() + 20]}
							tick={false}
						/>
						<Radar
							dataKey='value'
							stroke='#282D30'
							fill='#FF0101'
							fillOpacity={0.7}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</article>
		</>
	);
}
