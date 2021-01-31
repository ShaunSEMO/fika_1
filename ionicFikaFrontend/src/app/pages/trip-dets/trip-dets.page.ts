import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-trip-dets',
  templateUrl: './trip-dets.page.html',
  styleUrls: ['./trip-dets.page.scss'],
})
export class TripDetsPage implements OnInit {

  map: L.Map
  constructor() { }

  ngOnInit() {
    this.map = L.map('map', {
      center: [ -26.190555,28.03 ],
      zoom: 15,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // maxZoom: 12,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map)


    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

}
