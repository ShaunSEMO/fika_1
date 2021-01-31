import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-choose-route',
  templateUrl: './choose-route.page.html',
  styleUrls: ['./choose-route.page.scss'],
})
export class ChooseRoutePage implements OnInit {

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
