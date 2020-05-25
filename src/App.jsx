import evaluateAkunDice from 'akun-dice';
import React, {useState} from 'react';
import styles from './App.module.css';
import History from './History.jsx';
import Input from './Input.jsx';

export default function App() {
	const [rolls, setRolls] = useState([]);

	const onInputSubmit = (body) => {
		if (body.startsWith('/dice ') || body.startsWith('/roll ')) {
			const roll = evaluateAkunDice(body);
			setRolls([roll, ...rolls]);
		}
	};

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Akun Dice Demo</h1>
			<div className={styles.description}>
				<span>This site uses the same code to evaluate dice roll commands as </span>
				<a href="https://fiction.live">fiction.live</a>
				<span> which makes it the perfect place to test your rolls out!</span>
			</div>
			<div className={styles.description}>
				<span>Instruction on how to configure dice commands can be found </span>
				<a href="https://fiction.live/stories/Dice-Documentation/22nAnHSMgSBdLYZ7G">here</a>
				<span>.</span>
			</div>
			<Input submit={onInputSubmit}/>
			<History items={rolls}/>
		</div>
	);
}
