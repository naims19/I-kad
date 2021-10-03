import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, About } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-setup-m',
  templateUrl: './about-setup-m.page.html',
  styleUrls: ['./about-setup-m.page.scss'],
})
export class AboutSetupMPage implements OnInit {

  about: About = {
    aboutMe: '',
    age: '',
    addr: '',
    city: '',
    state: '',
    job: '',
    jobDesc: '',
    uid: ''
  }

  divCard1 : boolean
  divCard2 : boolean

  MySelect1: any =[];
  jobs: any;
  moreIndex1 : any = 1;

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
      this.about.uid=uid;
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

  async add(){
    if (this.about.aboutMe=="" || this.about.age=="" || this.about.addr=="" || this.about.city=="" || this.about.state=="" 
    || this.about.job=="" || this.about.jobDesc=="") {
      this.productAlertToast();
    }else{
      this.route.navigate(['admin-m'])
      this.crud.createAbout(this.about.uid, this.about);
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
