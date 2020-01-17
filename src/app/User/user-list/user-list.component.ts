import { Component, OnInit } from '@angular/core';
import {User} from '../../MODELS/User';
import {ServiceUService} from '../../Services/service-u.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor( private getUsers: ServiceUService) { }
  ngOnInit() {
    console.log( 'start');
    this.showConfig();
  }


  showConfig() {
    this.getUsers.getUsers()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      },(error)=>console.log(error)
      );
  }

}



