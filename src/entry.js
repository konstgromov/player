require('normalize.css');
require('./styles/main.less');

const React = require('react');
const ReactDOM = require('react-dom');
const { Router, browserHistory } = require('react-router');
const { Provider } = require('react-redux');
const { createStore } = require('redux');

const initState = {
	playlist: [
		{
			author: 'Lake Of Tears',
			name: 'Last Purple Sky',
			duration: 357
		}, {
			author: 'Kaleo',
			name: 'Way Down We Go',
			duration: 219
		}, {
			author: 'Pretty Pink feat. ARC',
			name: 'Run',
			duration: 177
		}, {
			author: 'Data',
			name: 'Don\'t Sing (feat. Benny Sings)',
			duration: 250
		}
	]
};

const reducer = require('./reducer');
const store = createStore(reducer, initState);
const routes = require('./routes')(store);

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render((
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>
	), document.querySelector('#container'));
});