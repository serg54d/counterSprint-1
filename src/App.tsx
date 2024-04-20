import React, { useState } from 'react';

import './App.css';
import { CounterEl } from './components/CounterEl';

function App() {
	const [number, setNumber] = useState<number>(0)

	return (
		<div className="App">
			<CounterEl
				number={number}
				setNumber={setNumber}

			/>

		</div>
	);
}

export default App;
