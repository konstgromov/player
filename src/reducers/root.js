import { combineReducers } from 'redux';
import auth from './auth';
import player from './player';
import playlist from './playlist';

export default combineReducers({
	auth,
	player,
	playlist
});