import axios from 'axios';
import { toast } from 'react-toastify';

import { CONFIG } from './app.config';
import actionCreaters  from './store/actionCreaters';
import { history } from './App';
import { loginConstants } from './store/constants';

axios.defaults.baseURL = CONFIG.serverURL;
axios.defaults.headers = {
    'Content-Type': 'application/json',
};

let myInterceptor;

axios.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.status === 401) {
        unsetAuthHeader();
        toast.error('Session Expired. Please login again.');
        actionCreaters.dispatch({ type: loginConstants.LOGOUT });
        history.push('/login');
    } else {
        return Promise.reject(error);
    }
});

export const setAuthHeader = (token) => {
    myInterceptor = axios.interceptors.request.use((config) => {
        config.headers = {
            Authorization: `Bearer ${token}`
        };
        return config;
    });
};

export const unsetAuthHeader = () => {
    axios.interceptors.request.eject(myInterceptor);
};

export default axios;
