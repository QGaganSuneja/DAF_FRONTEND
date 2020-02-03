import axios from 'axios';
import { api } from '../constants';
export const user = {
	login: userCredentials => {
		return axios.post(api + '/auth/login', userCredentials).then(res => {
			return res.data;
		});
	},
	forgotPassword: userEmail =>{
		return axios.post(api+'/auth/reset')
	}
};
