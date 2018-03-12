import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
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
  //@select('users') users$ : Observable<User>;
  users;
  //users: User[];
  errorMessage: string;

  constructor(
    //private userService: UserService,
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions
  ) { }

  ngOnInit() {
    this.userActions.getUsers();
    
    // this.userService.getUsers(4)
    //   .subscribe(user => {
    //     console.log('users received', user);
    //     this.users.push(user);
    //   },
    //     error => console.log('ERR', error));


  }

  update(){
    console.log(this.ngRedux.getState().users);

    this.ngRedux.subscribe(() => {
    this.users = this.ngRedux.getState().users;
    })
  }

  navigateToUserDetail(userid) {
    let route = '/user' + userid;
    console.log('Navigating to', route, '...');
    this.router.navigate(['/user/' + userid]);
  }

  log(message) {
    console.log(message);
  }

}
