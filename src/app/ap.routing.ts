import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
  {path: '' , redirectTo: '/login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
