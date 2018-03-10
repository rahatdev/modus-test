import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  errorMessage: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers(4)
      .subscribe(user => {
        console.log('users received', user);
        this.users.push(user);
      },
        error => console.log('ERR', error));
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
