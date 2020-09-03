import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookclubComponent } from './bookclub/bookclub.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'bookclub',component:BookclubComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'search',component:SearchComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
