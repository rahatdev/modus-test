import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { error } from 'util';

@Injectable()
export class UserService {
  private userAPI = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
   this.http.get(this.userAPI).subscribe


    return this.http.get(this.userAPI)
      .map(res => {
        //input checks
        //functional?
        let user: User = {
          firstName: 'res.results.name.first',
          lastName: '',
          email: '',
          phone: ''
        }

        // if fneame or orther require name is not valid, return error
        return null;
      })
  }

  getUsers(numberOfUsers): Observable<User[]> {
    if (numberOfUsers > 0) {
      // return as growing list of observables
      let users: User[] = [];
      for(let i = 0; i < numberOfUsers; i++) {
        
      }


      return null;
    }
    else this.handleError(new HttpErrorResponse(new error('numberOfUsers must be an integer greater than 0')))
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
