import { Component, OnInit } from '@angular/core';
import { Loan } from '../../MODELS/Loan';
import { ServiceLoanService } from 'src/app/Services/service-loan.service';
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

loan: any;
  loans: any;

  constructor(private getLoan: ServiceLoanService) { }

  ngOnInit() {

    this.showConfig();

  }
  showConfig() {
    this.getLoan.getLoan()
      .subscribe((data) => {
        console.log(data);
        this.loans = data;

      }, (error) => console.log(error)

      );
  }


  deliver(LoanId) {

     this.loan = this.loans.filter(loan => loan.id == LoanId);
      this.getLoan.putDeliver(this.loan).subscribe(reponse => {
      this.showConfig();
    }, error => { console.log("error") }, () => { });

  }



}
