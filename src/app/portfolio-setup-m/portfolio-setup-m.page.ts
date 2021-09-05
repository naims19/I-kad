import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-setup-m',
  templateUrl: './portfolio-setup-m.page.html',
  styleUrls: ['./portfolio-setup-m.page.scss'],
})
export class PortfolioSetupMPage implements OnInit {

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
