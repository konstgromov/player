import { SET_PLAYER_TIME, PLAYER_PLAY, PLAYER_PAUSE } from 'actionTypes';

const initState = {
	src: 'https://cs1-58v4.vk-cdn.net/p10/88620b28659b44.mp3',
	status: 'pause',
	time: 0,
	duration: 163
};

function player(state = initState, action) {
	if (action.type === PLAYER_PLAY) {
		return {
			...state,
			status: 'play'
		};
	}

	if (action.type === PLAYER_PAUSE) {
		return {
			...state,
			status: 'pause'
		};
	}

	if (action.type === SET_PLAYER_TIME) {
		return {
			...state,
			time: action.payload
		};
	}

	return state;
}

export default player;