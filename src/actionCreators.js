import { AUTH_REQUEST, LOGOUT, SET_PLAYER_TIME } from 'actionTypes';

export const auth = () => (dispatch) => {
	localStorage.token = 'test';

	dispatch({ type: AUTH_REQUEST });
};

export const logout = () => {
	delete localStorage.token;

	return { type: LOGOUT };
};

export const setPlayerTime = (time) => ({
	type: SET_PLAYER_TIME,
	payload: time
});