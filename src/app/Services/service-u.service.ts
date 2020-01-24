import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../MODELS/User';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'

})


export class ServiceUService {

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(`${environment.BaseUrl}User`);
  }


  getUserID(id: number) {

    const url = (`${environment.BaseUrl}User/${id}`);
    return this.http.get<User>(url);
  }


  getUserDebts(id: number) {

    const url = (`${environment.BaseUrl}Validator/${id}`);
    return this.http.get<Object>(url);
  }


  getUserActiveLoans(id: number) {

    const url = (`${environment.BaseUrl}Validator/${id}`);
    return this.http.post<Object>(url, "{}");
  }



  putUser(user: User) {
    const url = (`${environment.BaseUrl}User/${user.ID}`);
    return this.http.put<User>(url, user);
  }


  postUser(user: User) {
    const url = (`${environment.BaseUrl}User`);
    return this.http.post(url, user);
  }

  postUsers(user: User) {
    const url = (`${environment.BaseUrl}User`);
    console.log("++++******++++++");
    console.log(user);
    console.log(url);
    return this.http.post<User>(url, user);
  }

  updateUser(user: User) {
    const url = (`${environment.BaseUrl}User`);
    return this.http.put<User>(url, user);
  }






}
