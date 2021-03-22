import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage {

  public items: any;
  reorder= false ;
  
  constructor() { 
    

    this.items = [
      'Home',
      'About Me',
      'Resume',
      'Portfolio',
      'Pakej',
      'Contact'
    ];
  }

  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
     let draggedItem = this.items.splice(event.detail.from,1)[0];
     this.items.splice(event.detail.to,0,draggedItem)
    event.detail.complete();
  }

  // getList() {
  //   console.table(this.items);
  // }

  // reorderItems(event){
  //   console.log(event);
  //   let itemToMove = this.items.splice(event.detail.from,1)[0];
  //   this.items.splice(event.detail.to, 0, itemToMove);
  // }

  save(){
    console.log(this.items);
  }

  toggleReorder() {

    if(this.reorder==true){
      this.reorder=false;
    }else{
      this.reorder=true;
    }
    
  }
  

}
