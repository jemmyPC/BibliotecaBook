import { Component, OnInit } from '@angular/core';
import { ServiceUService } from 'src/app/Services/service-u.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/MODELS/User';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  userUp = FormGroup


  constructor(private postUsers: ServiceUService, private router: Router) { }
  newUser: User;
  err: object;


  ngOnInit() {
    this.err = {};
    this.newUser = new User();

  }


  print() {
    this.postUsers.postUsers(this.newUser).subscribe(
      reponse => {
        window.alert("User added");
        this.router.navigateByUrl('/User');
      }
      ,
      error => {
        console.log(error);
        const json = error.error;
        console.log(json);
        for (const key in this.err) { this.err[key] = ""; }
        for (const key in json) { this.err["err" + key] = json[key]; }
      }, () => { });
  }

}





