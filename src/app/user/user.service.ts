import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../core/models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { error } from 'util';

@Injectable()
export class UserService {
  private userAPI = 'https://randomuser.me/api/';

  private usersTemp: User[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "jsmith@something.com",
      phone: "344-233-4343"
    },{
      id: 2,
      firstName: "Maggie",
      lastName: "Smith",
      email: "magsmith@something.com",
      phone: "344-233-4343"
    },{
      id: 3,
      firstName: "Feline",
      lastName: "Jones",
      email: "fjones@something.com",
      phone: "344-344-4443"
    },{
      id: 4,
      firstName: "Natalie",
      lastName: "Quack",
      email: "nquack@something.com",
      phone: "344-233-4343"
    },{
      id: 5,
      firstName: "Financ",
      lastName: "Coco",
      email: "fcoco@something.com",
      phone: "344-233-4343"
    },{
      id: 6,
      firstName: "Plati",
      lastName: "Platimus",
      email: "jsmith@something.com",
      phone: "344-233-4343"
    }
  ];

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User>(this.userAPI);
  }

  getUsersX(numberOfUsers) {
    console.log('get users...');

    if (numberOfUsers > 0) {
      let users = [];
      for (let i = 0; i < numberOfUsers; i++) {
        console.log(i);
        this.getUser().subscribe(res => users.push(res));
      }
      console.log('users:', users);

      return new Observable((observer) => {
        
      })

    }
    else this.handleError(new HttpErrorResponse(new error('numberOfUsers must be an integer greater than 0')))
  }

  getUsers(x): Observable<User>{
    return new Observable((observer) => {
      this.usersTemp.forEach(user => observer.next(user));
        observer.complete();
    })
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }




  //temp


  // getBooksWithAuthor(): Observable<any[]> {
  //   return this.http.get('/api/books/')
  //     .map((res: any) => res.json())
  //     .flatMap((books: any[]) => {
  //       if (books.length > 0) {
  //         return Observable.forkJoin(
  //           books.map((book: any) => {
  //             return this.http.get('/api/authors/' + book.author_id)
  //               .map((res: any) => {
  //                 let author: any = res.json();
  //                 book.author = author;
  //                 return book;
  //               });
  //           });
  //         );
  // }
  //       return Observable.of([]);
  //     });
  // }

}
