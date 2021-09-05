import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-color-m',
  templateUrl: './admin-color-m.page.html',
  styleUrls: ['./admin-color-m.page.scss'],
})
export class AdminColorMPage implements OnInit {

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
