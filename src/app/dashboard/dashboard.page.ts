import { Component, OnInit } from '@angular/core';
// import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';
import { CrudFunctionService } from '../services/crud-function.service';

export class user{
  $key: string;
  username: string;
  fullname: string;
  id: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  Users: user[];
  data: any;
  user: any;

  constructor(
    public authService: AuthService,
    private db: CrudFunctionService,
  ) { }

  ngOnInit() {
    // this.db.getUsers().subscribe((res) =>{
    //   this.Users = res.map((u) =>{
    //     return{
    //       id: u.payload.doc.id,
    //       ...u.payload.doc.data() as user
    //     };
    //   })
    // })
    console.log(this.authService.user)
    this.user=this.authService.user;
  }

  userList(){
    this.db.getUsers().subscribe((data) =>{
      console.log(data)
    })
  }

}
