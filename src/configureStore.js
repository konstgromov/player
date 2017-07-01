import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'reducers/root';

function configureStore() {
	const initState = {
		playlist: [
			{
				src: 'https://psv4.userapi.com/c536507/u168461845/audios/eab77e34cff2.mp3',
				author: 'Lake Of Tears',
				name: 'Last Purple Sky',
				duration: 357
			}, {
				src: 'https://cs1-60v4.vk-cdn.net/p6/a3eb35a5a33819.mp3',
				author: 'Kaleo',
				name: 'Way Down We Go',
				duration: 219
			}, {
				src: 'https://cs1-48v4.vk-cdn.net/p13/d01ef4d44d5bb1.mp3',
				author: 'Pretty Pink feat. ARC',
				name: 'Run',
				duration: 177
			}, {
				src: 'https://cs1-36v4.vk-cdn.net/p24/6b40a1c683f985.mp3',
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