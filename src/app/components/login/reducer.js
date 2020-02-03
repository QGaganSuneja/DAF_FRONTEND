import { USER_LOG_IN } from './types';
const initialState = {
	userLoggedIn: !!localStorage.getItem('DFA_USER_TOKEN')
};
const user = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_LOG_IN: {
			return { userLoggedIn: true, ...payload };
			break;
		}
		default: {
			return { ...state };
		}
	}
};
export default user;
