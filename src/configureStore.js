import { createStore } from 'redux';
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

	const store = createStore(rootReducer, initState);

	return store;
}

export default configureStore;