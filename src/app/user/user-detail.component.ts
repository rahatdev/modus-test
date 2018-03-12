import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { UserActions } from './user.actions';


@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userActions: UserActions
  ) { }

  ngOnInit() {
    console.log('user-detail on onit called.')
    let id = +this.route.snapshot.paramMap.get('id');
    this.user = this.userActions.getUserById(id);
  }

  /**
   * @author Rahat Hussain
   * @desc Navigates back to users-list 
   */
  onBack(): void {
    this.router.navigate(['./users'])
  }

}
