import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ProjectModalPage} from '../project-modal/project-modal.page';

@Component({
  selector: 'app-portfolio-web',
  templateUrl: './portfolio-web.page.html',
  styleUrls: ['./portfolio-web.page.scss'],
})
export class PortfolioWebPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ProjectModalPage,
      cssClass: 'fullscreen'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
