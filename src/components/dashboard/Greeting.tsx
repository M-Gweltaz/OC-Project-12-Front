import { JSX } from 'react';
import '../../styles/dashboard/Greeting.css';

interface Props {
	user: string;
}

export default function Greeting({ user }: Props): JSX.Element {
	return (
		<>
			<article className='greetingContainer'>
				<h2 className='greetingName'>
					Bonjour
					<span className='greeting-highligh'> {user}</span>
				</h2>
				<p className='greetingText'>
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>
			</article>
		</>
	);
}
