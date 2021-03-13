import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pakej-web',
  templateUrl: './pakej-web.page.html',
  styleUrls: ['./pakej-web.page.scss'],
})
export class PakejWebPage implements OnInit {

  constructor() { }
  
  option = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 1,
    // autoplay: true,
  }
  ngOnInit() {
  }

}
