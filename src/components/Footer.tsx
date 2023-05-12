import { JSX } from 'react';
import '../styles/Footer.css';
import meditationIcon from '../assets/meditation.png';
import swimmingIcon from '../assets/swimming.png';
import bikingIcon from '../assets/biking.png';
import bodyBuildingIcon from '../assets/bodybuilding.png';

export default function Footer(): JSX.Element {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className='footerContainer'>
			<ul className='activityList'>
				<li className='activityIcon'>
					<img src={meditationIcon} alt='meditation icon' />
				</li>
				<li className='activityIcon'>
					<img src={swimmingIcon} alt='swimming icon' />
				</li>
				<li className='activityIcon'>
					<img src={bikingIcon} alt='biking icon' />
				</li>
				<li className='activityIcon'>
					<img src={bodyBuildingIcon} alt='bodybuilding icon' />
				</li>
			</ul>
			<p className='footerText'>Copiryght, SportSee {currentYear}</p>
		</footer>
	);
}
