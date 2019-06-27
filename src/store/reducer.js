import { loginConstants } from './constants';
import { Storage } from '../storage';

// const authRecord = Record({
//     loggedIn: false,
//     loggingIn: false,
//     user: undefined,
//     error: undefined,
// });

// const user='user';//get user from localStorage

let initialState = {
                loggedIn: false,
                loggingIn: false,
                user: undefined,
                error: undefined
};

const user = JSON.parse(Storage.user);

initialState = user ? { ...initialState ,loggedIn: true, user } : {...initialState, loggedIn: false };

const reducer =(state = initialState, action)=> {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {...state,
                loggingIn: true,
                loggedIn: false,
            };
        case loginConstants.LOGIN_SUCCESS:
            return {...state,
                loggedIn: true,
                loggingIn: false,
                user: action.payload
            };
        case loginConstants.LOGIN_FAILURE:
            return {...state,
                loggedIn: false,
                loggingIn: false,
                error: action.payload
            };
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default reducer;