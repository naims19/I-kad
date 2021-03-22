import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abooutme-setup',
  templateUrl: './abooutme-setup.page.html',
  styleUrls: ['./abooutme-setup.page.scss'],
})
export class AbooutmeSetupPage implements OnInit {
  MySelect1: any =[];
  jobs: any;
  moreIndex1 : any = 1;

  constructor() { 

  }

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
}
