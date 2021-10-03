import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, About } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

export class about{
  $key: String;
  aboutMe: String;
  age: String;
  addr: String;
  city: String;
  state: String;
  job: String;
  jobDesc: String;
  id: String
}

export class social{
  $key: String;
  phone: String;
  email: String;
  id: String;
}

export class user{
  $key: String;
  email: String;
  id: String
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  About: any;
  data: any;
  about: any;

  Social: any;
  social: any;

  User: any;

  constructor(
    private crud: CrudFunctionService,
    private db : AngularFirestore,
    private storageData: Storage,
  ) {}

  ngOnInit(){
    this.storageData.get('uidM').then(uid=> {
      console.log(uid)
      // this.profile.uid=uid;
      this.aboutList(uid)
      this.socialList(uid)
      this.userList(uid)
    })
  }

  aboutList(uid){
    this.crud.getUserAbout(uid)
    .subscribe((data) => {
      this.About = data
      console.log(this.About)
    })
  }

  socialList(uid){
    this.crud.getUserSocial(uid)
    .subscribe((data) => {
      this.Social = data
      console.log(this.Social)
    })
  }

  userList(uid){
    this.crud.getUser(uid)
    .subscribe((data) => {
      this.User = data
      console.log(this.User)
    })
  }

}
