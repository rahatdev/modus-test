import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

import { UserService } from './user/user.service';
import { UsersListComponent } from './user/users-list.component';
import { UserDetailComponent } from './user/user-detail.component';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState, store} from './core/store';
import { UserActions} from './user/user.actions';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [ 
    UserService,
    UserActions
   ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.provideStore(store);
  }
}
