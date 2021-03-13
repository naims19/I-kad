import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.page.html',
  styleUrls: ['./project-modal.page.scss'],
})
export class ProjectModalPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }
}
