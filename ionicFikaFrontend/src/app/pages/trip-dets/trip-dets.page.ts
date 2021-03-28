import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import * as $ from "jquery";

@Component({
  selector: 'app-trip-dets',
  templateUrl: './trip-dets.page.html',
  styleUrls: ['./trip-dets.page.scss'],
})
export class TripDetsPage implements OnInit {

  map: L.Map
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){ 
    $(document).ready(function(){ 

      let socket = new WebSocket('wss://fika-1.herokuapp.com/ws/trackBus')

      // socket.onopen = (e) => {
      //   alert('connection established')
      // } 

      // socket.onclose = (e) => {
      //   alert('connection closed')
      // }

    //TODO: get start location from db (long and lat) for map centering
      this.map = L.map('map', {
        center: [ -26.190555,28.03 ],
        zoom: 15,
        renderer: L.canvas()
      })
  
      L.tileLayer('https://api.mapbox.com/styles/v1/lwazimaps/ckm8io7vy02qj17p3u2r5dpcz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHdhemltYXBzIiwiYSI6ImNrbThnMHFjZTBsZXQycG51bTVsanFkNmMifQ.8xgG88yyHGZ6DB_6Y-nI_Q', {
        maxZoom: 18,
        attribution: 'FIKA',
      }).addTo(this.map)
  
  
      setTimeout(() => {
        this.map.invalidateSize();
      }, 1000);

      //tracking the bus
      this.trackedRoute = [];

      // TODO: get live location data
      socket.onmessage = (e) => {
        let parsed_data = JSON.parse(e.data);

        this.map.panTo(new L.LatLng(parsed_data['lat'], parsed_data['lon']))
  
        if(this.trackedRoute.length > 1){
          this.trackedRoute.push({lat: parsed_data['lat'], lng: parsed_data['lon']});
          var polyline = L.polyline(this.trackedRoute, {color: 'blue'});
          polyline.addTo(this.map);
        }
        else{
          this.trackedRoute.push({lat: parsed_data['lat'], lng: parsed_data['lon']});
        }

        // L.marker([parsed_data['lat'], parsed_data['lon']]).addTo(this.map)
        //     .bindPopup('The bus right here');
          console.log(parsed_data)
      }
    }); 
  } 

}
// this does nothing