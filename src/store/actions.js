import { toast } from 'react-toastify';
import { history } from '../App';
import { authService } from './service';
import { loginConstants } from './constants';
import { setAuthHeader, unsetAuthHeader } from '../axios.config';
import { ability, ruleBuilder } from '../components/Authorization/ability';
import { Storage } from '../storage';

// export interface IUserIdentity {
//     user_id: string;
//     email: string;
//     first_name: string;
//     last_name: string;
// }

// export interface IUser {
//     token: string;
//     privileges: string;
//     identity: IUserIdentity;
// }

export const Login = (username, password) => {
    function request() { return { type: loginConstants.LOGIN_REQUEST }; }
    function success(user) { return { type: loginConstants.LOGIN_SUCCESS, payload: user }; }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, payload: error }; }

    return async (dispatch) => {
        try {
            unsetAuthHeader(); // <--
            dispatch(request());

            const user = await authService.login(username, password);
            setAuthHeader(user.token);

            const rules = ruleBuilder(user);
            ability.update(rules);

            dispatch(success(user));

            if (Storage.remember) {
                Storage.user = JSON.stringify(user);
            }
            history.push('/home');
        } catch (error) {
            toast.error(`Unable to login. ${error.message}`);
            dispatch(failure(error));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: loginConstants.LOGOUT });
        } catch (error) {
            console.error('Unable to logout:', error);
        } finally {
            Storage.clear();
            unsetAuthHeader();
            history.push('/login');
        }
    };
};

