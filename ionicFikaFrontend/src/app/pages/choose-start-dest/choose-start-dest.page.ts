import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import * as L from "leaflet";
import { from } from 'rxjs';
// import { Socket } from 'ng-socket-io';
import { NavigationExtras, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-choose-start-dest',
  templateUrl: './choose-start-dest.page.html',
  styleUrls: ['./choose-start-dest.page.scss'],
})
export class ChooseStartDestPage implements OnInit {

  private map: L.Map;
  Stops:any=[
  //   {
  //     "id": 1,
  //     "route_id": 1,
  //     "location": "Amic Deck",
  //     "lat": "-26.191570",
  //     "lon": "28.028340"
  // },
  // {
  //     "id": 2,
  //     "route_id": 1,
  //     "location": "Rosebank",
  //     "lat": "-26.147820",
  //     "lon": "28.042600"
  // },
  // {
  //     "id": 4,
  //     "route_id": 3,
  //     "location": "Parktown",
  //     "lat": "-26.181311",
  //     "lon": "28.038944"
  // }
  ];

  public trip = {
    start: '',
    end: ''
  }

  constructor(
    private router: Router,
    private service: SharedService,
    // private socket: Socket
  ) { }

  ngOnInit() {
    this.refreshStopList();
  }

  ngAfterViewInit(){ 
    $(document).ready(function(){ 

      this.map = L.map('map', {
        center: [ -26.190555,28.03 ],
        zoom: 15,
        renderer: L.canvas()
      })
  
      L.tileLayer('https://api.mapbox.com/styles/v1/lwazimaps/ckm8io7vy02qj17p3u2r5dpcz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHdhemltYXBzIiwiYSI6ImNrbThnMHFjZTBsZXQycG51bTVsanFkNmMifQ.8xgG88yyHGZ6DB_6Y-nI_Q', {
        maxZoom: 18,
        attribution: 'FIKA',
      }).addTo(this.map)

      L.marker([-26.191570, 28.028340]).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');

      for(let i = 0;i<=this.Stops.length;i++) {
        L.marker([-26.191570, 28.028340]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
      }

      for (let i = 0; i < this.Stops.length; i++) {
        L.marker([-26.191570, 28.028340]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
      }

      // this.Stops.forEach(stop => {
      //   L.marker([-26.191570, 28.028340]).addTo(this.map)
      //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
      // });

      
  
      setTimeout(() => {
        this.map.invalidateSize();
      }, 1000);

    }); 
  } 

  refreshStopList() {
    this.service.getStops().subscribe(data=>{
      this.Stops=data
    });
  }

  goAction(){

    let navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip
      }
    };
    document.getElementById("map").outerHTML = "";
    
    this.router.navigate(['trip-dets'], navigationExtras);
  }

}
