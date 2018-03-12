import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { error } from 'util';

@Injectable()
export class UserService {
  private userAPI = 'https://randomuser.me/api/';

  private users = []; // here to ensure the same set of users, since users are obtained from a random user generator

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    if (this.users.length == 0) { //initialize list once
      return this.getListOfRandomUsers(20);
    } else {
      return new Observable<User>((observer) => {
        this.users.forEach(user => observer.next(user));
        observer.complete();
      })
    }
  }

  getRandomUserFromAPI() {
    return this.http.get(this.userAPI);
  }

  getListOfRandomUsers(numberOfUsers): Observable<User> {
    if (numberOfUsers > 0) {
      let randomUsers = new Observable<User>((observer) => {
        for (let i = 0; i < numberOfUsers; i++) {
          this.getRandomUserFromAPI().subscribe(res => {
            let raw = res['results'][0];
            let user: User = {
              id: i + 1,
              firstName: raw.name.first,
              lastName: raw.name.last,
              email: raw.email,
              phone: raw.phone,
              picture: {
                thumbnail: raw.picture.thumbnail,
                medium: raw.picture.medium,
                large: raw.picture.large
              }
            };
            this.users.push(user);
            observer.next(user);
            if (i == numberOfUsers - 1) observer.complete();
          });
        }
      });
      return randomUsers;
    } else {
      return null
    }
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }


}
