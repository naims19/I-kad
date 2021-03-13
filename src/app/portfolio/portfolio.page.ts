import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
    async showModal(){
      const modal = await this.modalCtrl.create({
        component: ModalPage
      });
      return await modal.present();
    }

  ngOnInit() {
  }

}
