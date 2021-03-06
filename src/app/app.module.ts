import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PeopleComponent } from './people/people.component';
import { InfoPeopleComponent } from './info-people/info-people.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PeopleComponent,
    InfoPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
