import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../core/store';
import { UserService } from './user.service';

// action constants
export const GET_USERS = 'user/GET_USERS';


@Injectable()
export class UserActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private userService: UserService
    ) { }

    getUsers() {
        this.userService.getUsers()
            .subscribe(users => {
                this.ngRedux.dispatch({
                    type: GET_USERS,
                    users
                })
            })
    }

    getUserById(id) {
        let users = this.ngRedux.getState().users;
        if (!users || users.length == 0) this.getUsers();
        
        return this.ngRedux.getState().users.find((user) => user.id == id)
    }


}
