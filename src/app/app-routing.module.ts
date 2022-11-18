import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { DefaultComponent } from './default/default.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path : "" , component : DefaultComponent
  },
  { 
    path: "login", component :  LoginComponent
  },
  {
    path: "home", component : HomepageComponent, canActivate : [AuthGuardService]
  },
  {
    path: "reactive-form", component : ReactiveFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
