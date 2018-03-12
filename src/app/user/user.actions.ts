import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../core/store';
import { UserService } from '../core/services/user.service';

// action constants
export const GET_USERS = 'user/GET_USERS';


@Injectable()
export class UserActions {
    private isLoaded = false;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private userService: UserService
    ) { }

    getUsers() {
        if (!this.isLoaded) {
            const getUsersSubscription = this.userService.getUsers().subscribe(users => {
                this.ngRedux.dispatch({
                    type: GET_USERS,
                    users
                })
            });
            this.isLoaded = true;            
        } else {
            this.ngRedux.dispatch({ type: 'Default'});
        }


    }

    getUserById(id) {
        return this.ngRedux.getState().users.find((user) => user.id == id)
    }


}
