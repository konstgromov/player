import { AUTH_REQUEST, LOGOUT } from 'actionTypes';

export const auth = () => (dispatch) => {
	localStorage.token = 'test';

	dispatch({ type: AUTH_REQUEST });
};

export const logout = () => {
	delete localStorage.token;

	return { type: LOGOUT };
};