import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../core/models/user.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    //get user by id from state
    this.user = {
      id: id,
      firstName: "None",
      lastName: "Yet",
      email: "test@email.com",
      phone: "111-111-1111"
    }
  }

  onBack():void {
    this.router.navigate(['./users'])
  }

}
