import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, Profile, Social } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile-m',
  templateUrl: './admin-profile-m.page.html',
  styleUrls: ['./admin-profile-m.page.scss'],
})
export class AdminProfileMPage implements OnInit {

  profile: Profile = {
    date: new Date(),
    fullname: '',
    job: '',
    completed: false,
    uid: ''
  }

  social: Social = {
    whatsapp: '',
    twitter: '',
    fb: '',
    ig: '',
    linkedin: '',
    phone: '',
    email: '',
    uid: ''
  }

  divCard1 : boolean
  divCard2 : boolean

  constructor(
    private crud: CrudFunctionService,
    private db : AngularFirestore,
    private toastController: ToastController,
    private storageData: Storage,
    private route: Router
  ) { }

  ngOnInit() {
    this.divCard1 = false;
    this.divCard2 = true

    // uid profile
    this.storageData.get('uidM').then(uid=> {
      console.log(uid)
      this.profile.uid=uid;
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

  // add function

  async add(){
    if (this.profile.fullname=="" || this.profile.job=="") {
      this.productAlertToast();
    }else{
      this.route.navigate(['admin-m'])
      this.crud.updateProfile(this.profile.uid, this.profile);
      this.productAddToast();
    }
    // console.log(this.profile.kategori)
  }
  async productAddToast(){
    const toast = await this.toastController.create({
      message: 'Profile has been added',
      duration: 2000
    });
    toast.present();
  }
  async productAlertToast(){
    const toast = await this.toastController.create({
      message: 'Please fill in profile',
      duration: 2000
    });
    toast.present();
  }

  socialInfo(uid){
    this.route.navigate(['/admin-socia/', uid]);
  }
  
}
