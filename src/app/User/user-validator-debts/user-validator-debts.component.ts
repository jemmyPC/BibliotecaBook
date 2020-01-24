import { Component, OnInit } from '@angular/core';
import {ServiceUService} from '../../Services/service-u.service';
import { ServiceLoanService } from 'src/app/Services/service-loan.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-validator-debts',
  templateUrl: './user-validator-debts.component.html',
  styleUrls: ['./user-validator-debts.component.scss']
})
export class UserValidatorDebtsComponent implements OnInit {

  constructor(private getUsers: ServiceUService, private payDebts: ServiceLoanService, private route: ActivatedRoute) { }

  loan: any;
  loans: any;

  ngOnInit() {

this.getLoansDebts();
  }



  getLoansDebts() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.getUsers.getUserDebts(id)
      .subscribe((data) => {
        console.log(data);
        this.loans = data;

      }, (error) => console.log(error)

      );
  }


  Pay(LoanId) {

    this.loan = this.loans.filter(loan => loan.id == LoanId);
    console.log(this.loan);
    this.payDebts.putDeliver(this.loan).subscribe(reponse => {
      this.getLoansDebts();
    }, error => { console.log("error")}, () => { });

  }



}
