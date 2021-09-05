import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-setup-m',
  templateUrl: './about-setup-m.page.html',
  styleUrls: ['./about-setup-m.page.scss'],
})
export class AboutSetupMPage implements OnInit {

  divCard1 : boolean
  divCard2 : boolean

  MySelect1: any =[];
  jobs: any;
  moreIndex1 : any = 1;

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
}
