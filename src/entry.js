import 'normalize.css';
import 'styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import App from 'components/App';

const DOMReady = new Promise((resolve) => {
	if (document.readyState === 'interactive') {
		setTimeout(resolve, 0);
	} else {
		document.addEventListener('DOMContentLoaded', resolve);
	}
});

DOMReady.then(() => {
	const container = document.querySelector('#container');
	const store = configureStore();

	ReactDOM.render((
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	), container);
});