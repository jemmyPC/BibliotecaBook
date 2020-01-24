import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Loan } from '../MODELS/Loan';
import { catchError } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServiceLoanService {
  constructor(private http: HttpClient) { }

  getLoan() {
    return this.http.get(`${environment.BaseUrl}Loan`);
  }



  getLoanID(id: number) {

    const url = (`${environment.BaseUrl}Loan/${id}`);
    return this.http.get<Loan>(url);
  }



  putLoan(loan: Loan) {
    const url = (`${environment.BaseUrl}Loan/${loan.Id}`);
    return this.http.put<Loan>(url, loan);
  }


  postLoan(loan: Loan) {
    const url = (`${environment.BaseUrl}Loan`);
    return this.http.post(url, loan);
  }


  putDeliver(loan: Loan) {
    const url = (`${environment.BaseUrl}Loan`);

    let data = JSON.parse(JSON.stringify(loan))[0], l = {};

    for (const key in data) {

      if (key != "status") {

        l[key] = data[key];

      }
    }



    return this.http.put(url, l);
  }


}


