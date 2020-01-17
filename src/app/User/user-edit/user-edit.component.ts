import { Component, OnInit } from '@angular/core';
import { ServiceUService } from 'src/app/Services/service-u.service';
import { User } from 'src/app/MODELS/User';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  
  constructor( private postUsers: ServiceUService,private route: ActivatedRoute, private router : Router) { }
  newUser: User;
  ngOnInit() {
    
    console.log('start');
    this.getUser();
    console.log('finish');

  }


  getUser(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.postUsers.getUserID(id)
    .subscribe(user => {
      this.newUser = user;
      console.log(this.newUser);
    }, (error) => console.log(error));
  }

  
  print() {
    console.log("******************************");

    console.log(this.newUser);
    this.postUsers.updateUser(this.newUser).subscribe(reponse => {
      window.alert("User updated");
      this.router.navigateByUrl('/User')}, error => {console.log("error")}, ()=>{});
 }





}
