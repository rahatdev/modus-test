import { User } from '../models/user.model';
import { IAppState } from './IAppState';
import { GET_USERS } from '../../user/user.actions';

const users = [];

const initialState: IAppState = {
    users
}


function lazyLoadInitialUsers(state: IAppState, action): IAppState {
    return Object.assign({}, state, {
        users: [...state.users, action.users]
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return lazyLoadInitialUsers(state, action);
        default:
            return state;
    }
}