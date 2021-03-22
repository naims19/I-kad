import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-setup',
  templateUrl: './resume-setup.page.html',
  styleUrls: ['./resume-setup.page.scss'],
})
export class ResumeSetupPage implements OnInit {
  MySelect1: any =[];
  jobs: any;
  moreIndex1 : any = 1;

  MySelect2: any =[];
  moreIndex2 : any = 1;

  MySelect3: any =[];
  moreIndex3 : any = 1;

  constructor() { }

  ngOnInit() {
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
