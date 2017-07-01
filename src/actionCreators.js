import {
	AUTH_REQUEST,
	LOGOUT,
	PLAYER_SET_TIME,
	PLAYER_PLAY,
	PLAYER_PAUSE,
	PLAYER_CHANGE_TRACK
} from 'actionTypes';

export const auth = () => (dispatch) => {
	localStorage.token = 'test';

	dispatch({ type: AUTH_REQUEST });
};

export const logout = () => {
	delete localStorage.token;

	return { type: LOGOUT };
};

export const playerSetTime = (time) => ({
	type: PLAYER_SET_TIME,
	payload: time
});

export const playerPlay = () => ({ type: PLAYER_PLAY });

export const playerPause = () => ({ type: PLAYER_PAUSE });

export const playerChangeTrack = payload => ({
	type: PLAYER_CHANGE_TRACK,
	payload
});