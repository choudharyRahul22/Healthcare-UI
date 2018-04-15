import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   credentials = {'username': '', 'password': ''};
   loggedIn = false;

  constructor(private loginService: LoginService) {
    const numbers = Observable.interval(30000 * 60); // Call after 10 second.. Please set your time
    numbers.subscribe(x => {
      alert("validating session : runs every 30 minutes");
      // hit second api and update token agains
    });

  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      response => {
        console.log(response);
        this.loggedIn = true;
      },
      error => {
        console.log(error);
        this.loggedIn = false;
      }
    );
  }


  onSubmit() {
    console.log(this.credentials.username + ' : ' + this.credentials.password);
    this.loginService.sendCredentials(this.credentials.username, this.credentials.password).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('xAuthToken', response.json().token);
        this.loggedIn = true;
        //location.reload();
      },
      error => {
        console.log(error);
      }
      );
  }

}
