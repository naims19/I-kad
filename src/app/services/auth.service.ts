import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(
    private db: AngularFirestore,
    public auth: AngularFireAuth,
    private route: Router
  ) { }

  // Login
  loginFireAuth(value){
    return new Promise<any> ( (resolve, reject)=> {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }
  getUser(id){
    return this.db.collection('users').doc(id).valueChanges();
  }

  async signupUser(user): Promise<any> {
    console.log(user)
    console.log(user.password)
    let username = user.email;
    const credential = await this.auth.createUserWithEmailAndPassword(
      username,
      user.password
    );
    const uid = credential.user.uid;
    const data = {
      email:user["email"],
      fullname: user["fullname"],
      username: user["username"],
      uid: uid
    };
    const data1 = {}
    this.db.collection("users").doc(uid).set(data);
    this.db.collection("name").doc(uid).set(data1);
    return data;
  }
}
