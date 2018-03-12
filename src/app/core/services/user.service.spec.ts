import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { UrlSerializer } from '@angular/router';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('GetUser/GetUsers', () => {
    let service: UserService;

    beforeAll(() => {
      service = new UserService(null);
    });

    it('should get a single user', () => {
      const result = service.getRandomUserFromAPI();

      //TODO

      expect(result).toBeTruthy();
    });

    it('should get 5 users', () => {
      //const result = service.getUsers(5);

      //TODO

      //expect(result).toBeTruthy();
     // expect(result.length).toBe(5);
    });

    it('should get 20 users', () => {
      // TODO
    });
    it('should only get random users once', () => {
      // TODO
    });
    it('should return original list of random users if recalled', () => {
      // TODO
    });
    it('should return the correct user fields', () => {
      // TODO
    });
  })


});
