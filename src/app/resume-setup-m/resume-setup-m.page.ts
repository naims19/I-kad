import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-setup-m',
  templateUrl: './resume-setup-m.page.html',
  styleUrls: ['./resume-setup-m.page.scss'],
})
export class ResumeSetupMPage implements OnInit {

  divCard1 : boolean
  divCard2 : boolean

  MySelect1: any =[];
  jobs: any;
  moreIndex1 : any = 1;

  MySelect2: any =[];
  moreIndex2 : any = 1;

  MySelect3: any =[];
  moreIndex3 : any = 1;

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
  addBtn1(val1){
    if(val1==1){
      this.MySelect2.push(this.moreIndex2);
      this.moreIndex2++;
    }
    else{
      this.MySelect2.pop(this.moreIndex2);
      this.moreIndex2--;
    }
  }
  addBtn2(val1){
    if(val1==1){
      this.MySelect3.push(this.moreIndex3);
      this.moreIndex3++;
    }
    else{
      this.MySelect3.pop(this.moreIndex3);
      this.moreIndex3--;
    }
  }
}
