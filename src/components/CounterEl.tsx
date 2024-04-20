import React from 'react';
import s from './CounterEl.module.css'

type CounterElPropsType = {
	number: number
	setNumber: (number: number) => void
}

export function CounterEl(props: CounterElPropsType) {
	let { number, setNumber } = props

	const isMaxNumber = number >= 5
	const isMinNumber = number === 0
	const numberStyle = {
		color: isMaxNumber ? 'red' : ''
	}


	const onClickNumberIncHandler = () => {
		setNumber(++number)
	}
	const onClickNumberResetHandler = () => {
		setNumber(0)
	}

	return (
		<div className={s.counter}>
			<div style={numberStyle} className={s.number}>{number}</div>
			<div className={s.buttonsBlock}>
				<button disabled={isMaxNumber} onClick={onClickNumberIncHandler} className={s.button}>inc</button>
				<button disabled={isMinNumber} onClick={onClickNumberResetHandler} className={s.button}>reset</button>
			</div>
		</div >
	);
}


