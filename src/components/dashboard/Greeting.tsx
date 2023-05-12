import { JSX } from 'react';
import '../../styles/dashboard/Greeting.css';

export default function Greeting(): JSX.Element {
	return (
		<>
			<article className='greetingContainer'>
				<h2 className='greetingName'>
					Bonjour <span className='greeting-highligh'>NAMEVAR</span>
				</h2>
				<p className='greetingText'>
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>
			</article>
		</>
	);
}
