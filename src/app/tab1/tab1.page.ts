import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, Profile } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

export class profile{
  $key: string;
  fullname: string;
  job: string
  id: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  Profile: any;
  data: any;
  profile: any;

  constructor(
    private crud: CrudFunctionService,
    private db : AngularFirestore,
    private storageData: Storage,
  ) {}

  ngOnInit(){
    // console.log(this.crud.profile)
    // this.profile=this.crud.profile;
    this.storageData.get('uidM').then(uid=> {
      console.log(uid)
      // this.profile.uid=uid;
      this.profileList(uid)
    })

    
  }
  profileList(uid){
    this.crud.getUserProfile(uid)
    .subscribe((data) => {
      this.Profile = data
      console.log(this.Profile)
    })
  }

  // displayProfile(){
  //   this.crud.getUserProfile(uid).pipe(
  //     map((snap) =>
  //       snap.map((doc: any) => {
  //         return { key: doc.payload.doc.id, ...doc.payload.doc.data() };
  //       })
  //     ),
  //   ).subscribe(items=>{
  //     this.Profile = items;
  //     console.log(items)
  //   })
  // }

}
