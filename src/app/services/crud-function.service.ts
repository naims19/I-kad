import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';


export interface Profile {
  id?: String,
  fullname: String,
  job: String,
  completed: Boolean,
  date: any,
  uid: any
};

export interface Social {
  whatsapp: String,
  twitter: String,
  fb: String,
  ig: String,
  linkedin: String,
  phone: String,
  email: String,
  uid: any
}
export interface About{
  aboutMe: String,
  age: String,
  addr: String,
  city: String,
  state: String,
  job: String,
  jobDesc: String,
  uid: any
};

export interface User{
  id?: String,
  email: String,
  fullname: String,
  username: String,
  uid: any
}

export interface Resume{
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

@Injectable({
  providedIn: 'root'
})
export class CrudFunctionService {

  profile:any;

  constructor(
    private db: AngularFirestore,
  ) { }

  getUsers(){
    return this.db.collection('users').snapshotChanges();
  }
  getUser(id){
    return this.db.collection('users').doc(id).valueChanges();
  }
  // create user profile
  createProfile(profile){
    return this.db.collection('name').add(profile);
  }
  getProfiles(){
    return this.db.collection('name').snapshotChanges();
  }
  getUserProfile(id){
    return this.db.collection('name').doc(id).valueChanges();
  }
  updateProfile(id,profile){
    this.db.collection('name').doc(id).update(profile);
  }
  createSocial(id, social: Social){
    // return this.db.collection('name', ref => ref.where('uid', '==', id)).add(social);
    this.db.collection('name').doc(id).update(social);
  }
  getUserSocial(id){
    return this.db.collection('name').doc(id).valueChanges();
  }
  createAbout(id, about: About){
    this.db.collection('name').doc(id).update(about)
  }
  getUserAbout(id){
    return this.db.collection('name').doc(id).valueChanges();
  }
  createResume(id, resume: Resume){
    this.db.collection('name').doc(id).update(resume);
  }
  getUserResume(id){
    return this.db.collection('name').doc(id).valueChanges();
  }
}
