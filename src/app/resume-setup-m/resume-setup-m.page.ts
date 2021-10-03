import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, Resume } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-setup-m',
  templateUrl: './resume-setup-m.page.html',
  styleUrls: ['./resume-setup-m.page.scss'],
})
export class ResumeSetupMPage implements OnInit {

  // array
  resume : Resume = {
    edYear: '',
    edLocation: '',
    edTitle: '',
    expYear: '',
    expLocation: '',
    jobTitle: '',
    skillHTitle: '',
    skillTitle: '',
    skillPercentage: '',
    uid: ''
  }

  divCard1 : boolean
  divCard2 : boolean

  MySelect1: any =[];
  jobs: any;
  moreIndex1 : any = 1;

  MySelect2: any =[];
  moreIndex2 : any = 1;

  MySelect3: any =[];
  moreIndex3 : any = 1;

  constructor(
    private crud: CrudFunctionService,
    private db : AngularFirestore,
    private toastController: ToastController,
    private storageData: Storage,
    private route: Router
  ) { }

  ngOnInit() {
    this.divCard1 = false;
    this.divCard2 = true;

    // uid
    this.storageData.get('uidM').then(uid=> {
      console.log(uid)
      this.resume.uid=uid;
    })
  }

  openDiv1(){
    this.divCard1 = true;
    this.divCard2 = false;
  }

  openDiv2(){
    this.divCard1 = false;
    this.divCard2 = true;
  }

  addBtn(val1){
    if(val1==1){
      this.MySelect1.push(this.moreIndex1);
      this.moreIndex1++;
    }
    else{
      this.MySelect1.pop(this.moreIndex1);
      this.moreIndex1--;
    }
  }
  addBtn1(val1){
    if(val1==1){
      this.MySelect2.push(this.moreIndex2);
      this.moreIndex2++;
    }
    else{
      this.MySelect2.pop(this.moreIndex2);
      this.moreIndex2--;
    }
  }
  addBtn2(val1){
    if(val1==1){
      this.MySelect3.push(this.moreIndex3);
      this.moreIndex3++;
    }
    else{
      this.MySelect3.pop(this.moreIndex3);
      this.moreIndex3--;
    }
  }

  async add(){
    if (this.resume.edYear=="" || this.resume.edLocation=="" || this.resume.edTitle=="" || this.resume.expYear=="" || this.resume.expLocation=="" 
    || this.resume.jobTitle=="" || this.resume.skillHTitle=="" || this.resume.skillTitle=="" || this.resume.skillPercentage=="") {
      this.productAlertToast();
    }else{
      this.route.navigate(['admin-m'])
      this.crud.createResume(this.resume.uid, this.resume);
      this.productAddToast();
    }
    // console.log(this.profile.kategori)
  }
  async productAddToast(){
    const toast = await this.toastController.create({
      message: 'Details has been added',
      duration: 2000
    });
    toast.present();
  }
  async productAlertToast(){
    const toast = await this.toastController.create({
      message: 'Please fill in the details',
      duration: 2000
    });
    toast.present();
  }
}
