import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './IAppState';

export const USER_LOGIN = 'auth/login';
export const USER_LOGOUT = 'auth/logout';

@Injectable()
export class AuthActions {
    constructor(
        private ngRedux: NgRedux<IAppState>
    ) { }

    /**
    * @author Rahat Hussain
    * @desc Updates state on user login
    */
    userLogin() {
        this.ngRedux.dispatch({
            type: USER_LOGIN,
            userLoggedIn: true
        })
    }

    /**
    * @author Rahat Hussain
    * @desc Updates state on user logout
    */
    userLogout() {
        this.ngRedux.dispatch({
            type: USER_LOGOUT,
            userLoggedIn: false
        })
    }

}