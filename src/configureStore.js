import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'reducers/root';

function configureStore() {
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

	const middleware = applyMiddleware(thunk, logger);
	const store = createStore(rootReducer, initState, middleware);

	return store;
}

export default configureStore;