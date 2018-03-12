import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeAll(() => {
    service = new UserService(null);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('getRandomUserFromAPI', () => {
    it('should get a single user', () => {
      service.getRandomUserFromAPI().subscribe((res) => {
        expect(res).toBeTruthy();
        expect(res['results'][0].length).toBeGreaterThan(0);
      });
    });

    it('should return a user with essential properties', () => {
      service.getRandomUserFromAPI().subscribe((res) => {
        let raw = res['results'][0];

        expect(raw.name.first).toBeTruthy();
        expect(raw.name.last).toBeTruthy();
        expect(raw.email).toBeTruthy();
        expect(raw.phone).toBeTruthy();
        expect(raw.picture.thumbnail).toBeTruthy();
        expect(raw.picture.medium).toBeTruthy();
        expect(raw.picture.large).toBeTruthy();
      });
    });
  })

  describe('getListOfRandomUsers', () => {
    it('should get 5 users when input is 5', () => {
      let results = [];
      let numberOfUsers = 5;

      service.getListOfRandomUsers(numberOfUsers).subscribe((res) => {
        results.push(res);
      })

      expect(results.length).toBeGreaterThan(0);
      expect(results.length).toBe(numberOfUsers);
    });

    it('should get 20 users when input is 20', () => {      
      let results = [];
      let numberOfUsers = 20;

      service.getListOfRandomUsers(numberOfUsers).subscribe((res) => {
        results.push(res);
      })

      expect(results.length).toBeGreaterThan(0);
      expect(results.length).toBe(numberOfUsers);
    });
  })

  describe('getUsers', () => {
    it('should return users', () => {
      service.getUsers().subscribe((res) => {
        expect(res).toBeTruthy();
        expect(<User>res).not.toBeUndefined();
      })
    });

    // temp - needs to change once getUsers hits real db/API
    it('should return 20 users', () => {      
      let results = [];

      service.getUsers().subscribe((res) => {
        results.push(res);
      })

      expect(results.length).toBeGreaterThan(0);
      expect(results.length).toBe(20);
    })    

    it('should only get random users once', () => {      
      let results1 = [];
      let results2 = [];

      service.getUsers().subscribe((res) => {
        results1.push(res);
      })
      service.getUsers().subscribe((res) => {
        results2.push(res);
      })

      expect(results1.length).toBeGreaterThan(0);
      expect(results2.length).toBe(0);
    });    
  })


});
