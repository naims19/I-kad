import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ValidationFormUser: FormGroup;
  passwords: any;
  confirms: boolean= true;

  spinner: boolean = false;
  disabled: boolean = false;

  // validation msg
  ValidationMessages = {
    email: [
      { type: "required", message: "Please enter your email address" },
      { type: "pattern", message: "Email is incorrect. Try again" }
    ],
    fullname: [{type: "required", message: "Fullname Is Required"}],
    username: [{type: "required", message: "Name Is Required"}],
    password : [
      { type: "required", message: "Password is required here" },
      { type: "minlength", message: "Password must be atleast 6 characters" }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.ValidationFormUser = this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      fullname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

  check(event){
    if(event.target.value == this.passwords){
      this.confirms = true;
    }else{
      this.confirms =false;
    }
  }
  
  public registerUser(){
    console.log(this.ValidationFormUser.value);

    this.spinner = true;
    this.disabled = true;

    this.authService.signupUser(this.ValidationFormUser.value).then(async res => {
      this.route.navigate(['login']);
      console.log(res)
      const toast = await this.toast.create({
        header: 'Sucessful',
        message: 'You have successfully registered. Please login to continue',
        position: 'bottom',
        buttons: [{
          text: 'Okey',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Clicked');
          }
        }]
      });
      toast.present();
      this.spinner = false;
      this.disabled = false;
    })
    .catch(async err => {
      const toast = await this.toast.create({
        header: 'Aunthetication Error',
        message: 'This ID has been registered before. Please use another ID.',
        position: 'bottom',
        buttons: [{
          text: 'Okey',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      toast.present();
      this.spinner = false;
      this.disabled = false;
      console.log(err.message);
    })
  }
}
