import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { from } from 'rxjs';
// import { Socket } from 'ng-socket-io';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-choose-start-dest',
  templateUrl: './choose-start-dest.page.html',
  styleUrls: ['./choose-start-dest.page.scss'],
})
export class ChooseStartDestPage implements OnInit {

  map: L.Map;

  public trip = {
    start: '',
    end: ''
  }

  constructor(
    private router: Router,
    // private socket: Socket
  ) { }

  ngOnInit() {
    this.map = L.map('map').fitWorld();

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Kp7XziF7klfNmnQetZNl', {
      maxZoom: 18,
    }).addTo(this.map);

    //centre at user
    this.map.locate({
      setView: true,
      maxZoom: 14
    }).on('locationfound', (e) => {
      console.log('Location found');
    })


    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  goAction(){
    // this.socket.emit('set-start', this.trip.start);
    // this.socket.emit('set-end', this.trip.end);


    let navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip
      }
    };
    document.getElementById("map").outerHTML = "";
    this.router.navigate(['choose-route'], navigationExtras);
  }

}
