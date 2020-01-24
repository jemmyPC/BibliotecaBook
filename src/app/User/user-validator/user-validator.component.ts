import { Component, OnInit } from '@angular/core';
import {ServiceUService} from '../../Services/service-u.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-validator',
  templateUrl: './user-validator.component.html',
  styleUrls: ['./user-validator.component.scss']
})
export class UserValidatorComponent implements OnInit {

  constructor(private getUsers: ServiceUService, private route: ActivatedRoute) { }

  loan: any;
  loans: any;
  ngOnInit() {
    console.log("CONSTRUCTOR");
    this.getActiveLoans();
  }
  getActiveLoans() {
    const id = + this.route.snapshot.paramMap.get('id');
    console.log("Validator = "+id);
    this.getUsers.getUserActiveLoans(id)
      .subscribe((data) => {
        console.log(data);
        this.loans = data;

      }, (error) => console.log(error)

      );
  }



}
