import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendCredentials(username: string, password: string) {
    const url = 'http://localhost:8080/token';
    const encodedcredentails = btoa(username + ':' + password);
    const basicHeader = 'Basic ' + encodedcredentails;
    const headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });
    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    const url = 'http://localhost:8080/checkSession';
    const headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }

}
