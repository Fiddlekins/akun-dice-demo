import React, {useEffect, useReducer, useRef} from 'react';
import styles from './Input.module.css';

const initialState = {
	textarea: '/dice 1d6'
};

function reducer(state, {field, value}) {
	return {
		...state,
		[field]: value
	};
}

export default function Input({submit}) {
	const chatInputRef = useRef(null);

	const [state, dispatch] = useReducer(reducer, initialState);

	const trySubmit = () => {
		const body = chatInputRef.current.value;
		if (body.length > 0) {
			dispatch({field: 'textarea'});
			submit(body);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		trySubmit();
	};

	const onKeyDown = (e) => {
		if (e.key === 'Enter' && !e.altKey && !e.shiftKey && !e.ctrlKey) {
			e.preventDefault();
			trySubmit();
		}
	};

	const onChange = (e) => {
		dispatch({field: e.target.name, value: e.target.value});
	};

	useEffect(() => {
		const textarea = chatInputRef.current;
		textarea.style.height = 'inherit';
		// Why +2 ? Because without it the scrollbar is always visible
		textarea.style.height = `${textarea.scrollHeight + 2}px`;
	});

	return (
		<form className={styles.chatInput} onSubmit={onSubmit}>
			<textarea
				ref={chatInputRef}
				className={styles.textarea}
				name="textarea"
				value={state.textarea}
				placeholder="/dice 1d6"
				rows="1"
				onKeyDown={onKeyDown}
				onChange={onChange}
			/>
			{/*<button type="submit">Submit</button>*/}
		</form>
	);
}
