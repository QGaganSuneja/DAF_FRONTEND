import { USER_LOG_IN } from './types';
import { user } from '../../api/userApi';
export const login = userCredentials => dispatch =>
	user.login(userCredentials).then(res => {
		localStorage.setItem('DFA_USER_TOKEN', res.token);
		dispatch({ type: USER_LOG_IN, userCredentials });
	});
// .then(user => {
// 	localStorage.setItem('DFA_USER_TOKEN', user.token);
// 	dispatch({ type: USER_LOG_IN, userCredentials });
// });};
export const forgotPassword = userEmail = disaptch =>{
	
}