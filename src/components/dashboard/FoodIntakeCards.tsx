import { JSX } from 'react';
import FoodIntakeDetailedCard from './FoodIntakeDetailedCard';
import '../../styles/dashboard/FoodIntakeCards.css';

interface FoodIntake {
	calorieCount: number;
	proteinCount: number;
	carbohydrateCount: number;
	lipidCount: number;
	[key: string]: number; // Index signature
}

interface Props {
	foodIntake: FoodIntake;
}

export default function FoodIntakeCards({ foodIntake }: Props): JSX.Element {
	return (
		<>
			<article className='foodIntakeCardsContainer'>
				<ul className='foodIntakeCardList'>
					{Object.keys(foodIntake).map((food, index) => (
						<FoodIntakeDetailedCard
							key={index}
							food={food}
							value={foodIntake[food as keyof FoodIntake]}
						/>
					))}
				</ul>
			</article>
		</>
	);
}
