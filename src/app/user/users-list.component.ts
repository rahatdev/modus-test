import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../core/store';
import { Observable } from 'rxjs/Observable';
import { GET_USERS, UserActions } from './user.actions';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  errorMessage: string;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions
  ) {
    ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.users = store.users;
    });
  }

  ngOnInit() {
    this.userActions.getUsers();
  }

  /**
   * @author Rahat Hussain
   * @desc Navigates to user-detail for selected user.
   */
  navigateToUserDetail(userid) {
    this.router.navigate(['/user/' + userid]);
  }
}
