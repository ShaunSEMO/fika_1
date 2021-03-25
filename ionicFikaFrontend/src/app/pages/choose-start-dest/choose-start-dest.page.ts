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
  Stops:any=[];

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

      this.Stops.forEach(stop => {
        L.marker([stop.lat, stop.lon]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
      });

      
  
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
    
    this.router.navigate(['choose-route'], navigationExtras);
  }

}
