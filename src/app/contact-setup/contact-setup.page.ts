import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-setup',
  templateUrl: './contact-setup.page.html',
  styleUrls: ['./contact-setup.page.scss'],
})
export class ContactSetupPage implements OnInit {
  MySelect1: any =[];
  moreIndex1 : any = 1;

  MySelect2: any =[];
  moreIndex2 : any = 1;

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
}
