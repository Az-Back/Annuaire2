import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InfoPeopleComponent } from './info-people/info-people.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'details/:people', component: InfoPeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }