import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pakej',
  templateUrl: './pakej.page.html',
  styleUrls: ['./pakej.page.scss'],
})
export class PakejPage implements OnInit {

  constructor() { }

  option = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay: true,
  }

  ngOnInit() {
  }

}
