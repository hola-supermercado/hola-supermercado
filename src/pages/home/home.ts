import { Component} from '@angular/core';

import { NavController } from 'ionic-angular';

import { MapsComponent} from '../../components/maps/maps';
import { TransactiePage } from "../transactie/transactie";

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[MapsComponent]
})
export class HomePage {

  constructor(public navCtrl: NavController, maps:MapsComponent) {

  }

  goToTransaction(){
    this.navCtrl.push(TransactiePage);
  }

}
