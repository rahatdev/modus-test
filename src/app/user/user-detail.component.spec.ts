import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { UserActions } from './user.actions';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let actions: UserActions;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component = new UserDetailComponent(null, null, actions);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
