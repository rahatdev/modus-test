import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private usersURL = '';
  constructor() { }

  getUser(): Observable<User> {

      return null;
  }

  getUsers(numberOfUsers): Observable<User[]> {
    return null;
  }

}
