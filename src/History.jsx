import React from 'react';
import styles from './History.module.css';

export default function History({items}) {
	return (
		<div className={styles.history}>
			{items?.map((item, itemIndex) => {
				return <div
					key={items.length - itemIndex}
					className={styles.roll}
					dangerouslySetInnerHTML={{__html: item}}/>
			})}
		</div>
	);
}
