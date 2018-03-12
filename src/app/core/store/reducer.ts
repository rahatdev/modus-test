import { User } from '../models/user.model';
import { IAppState } from './IAppState';
import { GET_USERS } from '../../user/user.actions';
import { USER_LOGIN, USER_LOGOUT} from './auth.actions';

const users = [];

const initialState: IAppState = {
    users,
    userLoggedIn: false
}


function lazyLoadInitialUsers(state: IAppState, action): IAppState {
    return Object.assign({}, state, {
        users: [...state.users, action.users]
    });
}

function logStatus(state: IAppState, action){
    return Object.assign({}, state, {
        userLoggedIn: action.userLoggedIn
    })
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return lazyLoadInitialUsers(state, action);
        case USER_LOGIN:
            return logStatus(state, action);
        case USER_LOGOUT:
            return logStatus(state, action);
        default:
            return state;
    }
}