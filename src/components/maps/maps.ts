import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from 'ionic-native';

declare var google;
/*
  Generated class for the Maps component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;



  constructor() {

  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }
}
