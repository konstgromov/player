import { SET_PLAYER_TIME } from 'actionTypes';

const initState = {
	src: 'https://cs1-58v4.vk-cdn.net/p10/88620b28659b44.mp3',
	status: 'play',
	time: 0
};

function player(state = initState, action) {
	if (action.type === SET_PLAYER_TIME) {
		return {
			...state,
			time: action.payload
		};
	}

	return state;
}

export default player;