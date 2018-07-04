import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyB3a5jnqA0ik5WvetYAbCeGjLhpQFS-QMI';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));