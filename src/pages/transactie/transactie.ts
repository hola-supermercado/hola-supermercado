import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MapsComponent} from '../../components/maps/maps'

@Component({
  selector: 'page-transactie',
  templateUrl: 'transactie.html',
  providers:[MapsComponent]
})
export class TransactiePage {

  constructor(public navCtrl: NavController, maps:MapsComponent) {

  }

}
