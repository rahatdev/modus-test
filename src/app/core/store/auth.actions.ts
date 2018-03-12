import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './IAppState';

export const USER_LOGIN = 'auth/login';
export const USER_LOGOUT = 'auth/logout';

@Injectable()
export class AuthActions {
    constructor(
        private ngRedux: NgRedux<IAppState>
    ){}

    userLogin(){
        this.ngRedux.dispatch({
            type: USER_LOGIN,
            userLoggedIn: true
        })
    }

    userLogout(){
        this.ngRedux.dispatch({
            type: USER_LOGOUT,
            userLoggedIn: false
        })
    }

}