import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {AppComponent} from './app.component'
import {ViewComponent} from './view/view.component'
const routes: Routes = [
  {path:'sign',component:SignupComponent},
  {path:'home' ,component:AppComponent},

  {path:'view',component:ViewComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent= [SignupComponent]