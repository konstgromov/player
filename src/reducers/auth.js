import { AUTH_REQUEST, LOGOUT } from 'actionTypes';

function auth(state = {
	isAuthenticated: Boolean(localStorage.token)
}, action) {
	if (action.type === AUTH_REQUEST) {
		return { isAuthenticated: true };
	}

	if (action.type === LOGOUT) {
		return { isAuthenticated: false };
	}

	return state;
}

export default auth;