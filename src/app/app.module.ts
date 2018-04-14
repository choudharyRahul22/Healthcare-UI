import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import {MomentModule} from 'angular2-moment';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './ap.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
