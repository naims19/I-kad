import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pakej-setup',
  templateUrl: './pakej-setup.page.html',
  styleUrls: ['./pakej-setup.page.scss'],
})
export class PakejSetupPage implements OnInit {
  MySelect1: any =[];
  moreIndex1 : any = 1;

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
}
