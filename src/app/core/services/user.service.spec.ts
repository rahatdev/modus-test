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
      service = new UserService();
    })

    it('should get a single user', () => {
      const result = service.getUser();

      //TODO

      expect(result).toBeTruthy();
    })

    it('should get 5 users', () => {
      const result = service.getUsers(5);

      //TODO

      expect(result).toBeTruthy();
      expect(result.length).toBe(5);
    })
  })


});
