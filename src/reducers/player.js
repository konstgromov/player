import {
	PLAYER_SET_TIME,
	PLAYER_PLAY,
	PLAYER_PAUSE,
	PLAYER_CHANGE_TRACK
} from 'actionTypes';

const initState = {
	src: 'https://cs1-58v4.vk-cdn.net/p10/88620b28659b44.mp3',
	author: 'Portugal. The Man',
	name: 'Feel It Still',
	status: 'pause',
	time: 0,
	duration: 163
};

function player(state = initState, action) {
	if (action.type === PLAYER_CHANGE_TRACK) {
		const { src, author, name, duration } = action.payload;

		return {
			...state,
			src,
			author,
			name,
			status: 'play',
			time: 0,
			duration
		};
	}

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

	if (action.type === PLAYER_SET_TIME) {
		return {
			...state,
			time: action.payload
		};
	}

	return state;
}

export default player;