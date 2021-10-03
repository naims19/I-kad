import { Component, OnInit } from '@angular/core';
import { CrudFunctionService, Social, Profile } from '../services/crud-function.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-social-m',
  templateUrl: './admin-social-m.page.html',
  styleUrls: ['./admin-social-m.page.scss'],
})
export class AdminSocialMPage implements OnInit {

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

  profile: Profile = {
    date: new Date(),
    fullname: '',
    job: '',
    completed: false,
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
    this.divCard2 = true;

    // uid profile
    this.storageData.get('uidM').then(uid=> {
      console.log(uid)
      this.social.uid=uid;
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

  async add(){
    if (this.social.whatsapp=="" || this.social.twitter=="" || this.social.fb=="" || this.social.ig=="" || this.social.linkedin=="" 
    || this.social.phone=="" || this.social.email=="") {
      this.productAlertToast();
    }else{
      this.route.navigate(['admin-m'])
      this.crud.createSocial(this.social.uid, this.social);
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
