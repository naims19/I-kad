import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, About } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

export interface resume{
  edYear: String,
  edLocation: String,
  edTitle: String,
  expYear: String,
  expLocation: String,
  jobTitle: String,
  skillHTitle: String,
  skillTitle: String,
  skillPercentage: String,
  uid: any
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Resume: any;
  resume: any;
  data: any;

  constructor(
    private crud: CrudFunctionService,
    private db : AngularFirestore,
    private storageData: Storage,
  ) {}

  ngOnInit(){
    this.storageData.get('uidM').then(uid=> {
      console.log(uid)
      // this.profile.uid=uid;
      this.resumeList(uid)
    })
  }

  resumeList(uid){
    this.crud.getUserResume(uid)
    .subscribe((data) => {
      this.Resume = data
      console.log(this.Resume)
    })
  }

}
