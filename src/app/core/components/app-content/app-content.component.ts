import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { AuthActions } from '../../store/auth.actions';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authActions: AuthActions
  ) { }

  ngOnInit() {
    // this.isLoggedIn = false;
    this.ngRedux.subscribe(() => {
      let store = this.ngRedux.getState();
      this.isLoggedIn = store.userLoggedIn;
    })
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   *   3/12/18 - RH updated to use redux state for login
   */
  login() {
    // this.isLoggedIn = true;
    this.authActions.userLogin();
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   *   3/12/18 - RH updated to use redux state for login
   */
  logout() {
    // this.isLoggedIn = false;
    this.authActions.userLogout();
  }

}
