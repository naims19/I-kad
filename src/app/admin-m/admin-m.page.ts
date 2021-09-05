import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-m',
  templateUrl: './admin-m.page.html',
  styleUrls: ['./admin-m.page.scss'],
})
export class AdminMPage implements OnInit {

  divCard1 : boolean
  divCard2 : boolean

  constructor() { }

  ngOnInit() {
    this.divCard1 = false;
    this.divCard2 = true
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
