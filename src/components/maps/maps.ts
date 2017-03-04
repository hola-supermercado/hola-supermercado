import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation,GoogleMap,GoogleMapsEvent,
  GoogleMapsLatLng,
  CameraPosition,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker } from 'ionic-native';
import {NavController, Platform} from "ionic-angular";


/*
  Generated class for the Maps component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  templateUrl:'./maps.html',
  selector: 'maps'
})
export class MapsComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;



  constructor( platform:Platform) {
    platform.ready().then(() => {
      this.loadMap();
    })

  }



  loadMap() {
    console.log('WHAT')

    Geolocation.getCurrentPosition().then((position) => {

      let element: HTMLElement = document.getElementById('map');

      let map = new GoogleMap(element);

      // listen to MAP_READY event
      map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!');

        let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(40.447862, -3.668751)//position.coords.latitude, position.coords.longitude);
        console.log("ionic",ionic)
        let position1: CameraPosition = {
          target: ionic,
          zoom: 18,
          tilt: 30
        };

        // move the map's camera to position
        map.moveCamera(position1);

      }).catch( (err) => {
        console.log(err);
      })

    }).catch( (err) => {
      console.log(err);
    })
  }
}
