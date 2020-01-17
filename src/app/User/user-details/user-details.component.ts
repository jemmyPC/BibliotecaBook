import { Component, OnInit } from '@angular/core';
import {User} from '../../MODELS/User';
import { ServiceUService } from 'src/app/Services/service-u.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor( private getUsers: ServiceUService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    console.log( 'start');
    this.showConfig();
  }


  showConfig() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.getUsers.getUserID(id)
      .subscribe((data) => {
        this.user = data;
        console.log(this.user);
        console.log(data);
      },(error)=>console.log(error)
      
      );
  }

}



