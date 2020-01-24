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
  delete(id){
    this.getUsers.getUserID(id)
      .subscribe((user) => {
        console.log(user);
        user.IsActive = false;
        
        this.getUsers.updateUser(user).subscribe((r) => {
          window.alert(user["name"]+" "+user["lastName"]+" was deleted");
          this.showConfig();
        },(error)=>{window.alert(error.error["Debt"]);});

        
      },(error)=>console.log(error)
      );


  }

}



