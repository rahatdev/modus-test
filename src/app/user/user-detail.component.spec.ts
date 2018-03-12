import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { UserActions } from './user.actions';
import { ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user.model';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  let actions: UserActions;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component = new UserDetailComponent(null, null, actions);

    route = new ActivatedRoute();
    actions = new UserActions(null, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should initialize user from user returned from state', () => {
    let testUser: User = {
      id: 1,
      firstName: 'Test',
      lastName: 'User'
    };

    spyOn(actions, 'getUserById').and.callFake(() => {
      return testUser;
    })

    component.ngOnInit();

    expect(component.user).not.toBeNull();
    expect(component.user).toBe(testUser);
  })

});
