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

      this.map = L.map('map', {
        center: [ -26.190555,28.03 ],
        zoom: 15,
        renderer: L.canvas()
      })
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'FIKA',
      }).addTo(this.map)
  
  
      setTimeout(() => {
        this.map.invalidateSize();
      }, 1000);

      //copy over succesfull code from the previous page for tracking
    }); 
  } 

}
