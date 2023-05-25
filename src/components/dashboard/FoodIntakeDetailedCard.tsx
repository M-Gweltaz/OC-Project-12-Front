import { JSX } from 'react';
import calorieIcon from '../../assets/calories-icon.png';
import proteinIcon from '../../assets/protein-icon.png';
import glucidIcon from '../../assets/carbs-icon.png';
import fatIcon from '../../assets/fat-icon.png';
import '../../styles/dashboard/FoodIntakeDetailedCard.css';
interface Props {
	food: string;
	value: number;
}

export default function FoodIntakeDetailedCard({
	food,
	value,
}: Props): JSX.Element {
	let foodIntake: string;
	let foodIntakeIcon: string;

	switch (true) {
		case food == 'calorieCount':
			foodIntake = 'calories';
			foodIntakeIcon = calorieIcon;
			break;
		case food == 'proteinCount':
			foodIntake = 'Proteines';
			foodIntakeIcon = proteinIcon;
			break;
		case food == 'carbohydrateCount':
			foodIntake = 'Glucide';
			foodIntakeIcon = glucidIcon;
			break;
		case food == 'lipidCount':
			foodIntake = 'Lipides';
			foodIntakeIcon = fatIcon;
			break;

		default:
			foodIntake = '?';
			foodIntakeIcon = calorieIcon;
	}

	return (
		<>
			<li className='foodIntakeDetailedCard'>
				<img
					src={foodIntakeIcon}
					alt='calorie icon'
					className='foodIntakeDetailedIcon'
				/>
				<div className='foodIntakeDetailedDescription'>
					<h4 className='foodIntakeDetailedTitle'>{value}</h4>
					<p className='foodIntakeDetailedText'>{foodIntake}</p>
				</div>
			</li>
		</>
	);
}
