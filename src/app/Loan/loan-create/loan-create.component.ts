import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ServiceLoanService } from 'src/app/Services/service-loan.service';
import { User } from 'src/app/MODELS/User';
import { Book } from 'src/app/MODELS/Book';
import { Loan } from 'src/app/MODELS/Loan';
import { ServiceBookService } from 'src/app/Services/service-book.service';
import { ServiceUService } from 'src/app/Services/service-u.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
users: any
books: any
loan:Loan
  constructor(private postLoan: ServiceLoanService, private getBook: ServiceBookService, private getUsers: ServiceUService,  private router: Router)
   { }
   err: Object;

  ngOnInit() { 
this.loan = new Loan();
    console.log( 'start');
    this.err = {};
    this.showConfigU();
    this.showConfigB();

  }


  showConfigU() {
    this.getUsers.getUsers()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      },(error)=>console.log(error)
      
      );
  }

  showConfigB() {
    this.getBook.getBook()
      .subscribe((data) => {
        this.books = data;
        console.log(this.books);
      },(error)=>console.log(error)
      
      );
  }


  save() {
   
    console.log(this.loan)
    this.postLoan.postLoan(this.loan).
    subscribe(reponse => {
      let data = JSON.parse(JSON.stringify(reponse));

      for (const key in this.err) {
        this.err[key] = "";
      }        
      for (const key in data) {
        this.err["err" + key] = data[key];
      }

      window.alert("Loan done");
      this.router.navigateByUrl('/Loan');      
  },
  error => {
    const json = error.error;
    console.log(json);
    for (const key in this.err) {
      this.err[key] = "";
    }        
    for (const key in json) {
      this.err["err" + key] = json[key];
    }

  }, () => { });
}



}
