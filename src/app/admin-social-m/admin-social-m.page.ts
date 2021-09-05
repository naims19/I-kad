import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-social-m',
  templateUrl: './admin-social-m.page.html',
  styleUrls: ['./admin-social-m.page.scss'],
})
export class AdminSocialMPage implements OnInit {

  divCard1 : boolean
  divCard2 : boolean

  constructor() { }

  ngOnInit() {
    this.divCard1 = false;
    this.divCard2 = true;
  }

  openDiv1(){
    this.divCard1 = true;
    this.divCard2 = false;
  }

  openDiv2(){
    this.divCard1 = false;
    this.divCard2 = true;
  }

}
