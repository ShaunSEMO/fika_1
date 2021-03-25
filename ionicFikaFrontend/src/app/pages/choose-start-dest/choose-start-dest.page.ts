import { Component, OnInit } from '@angular/core';
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

  public trip = {
    start: '',
    end: ''
  }

  constructor(
    private router: Router,
    // private socket: Socket
  ) { }

  ngOnInit() {}

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
  
  
      setTimeout(() => {
        this.map.invalidateSize();
      }, 1000);

      // socket.onmessage = (e) => {
      //   let parsed_data = JSON.parse(e.data);

      //   L.marker([parsed_data['lat'], parsed_data['lon']], {icon: carIcon}).addTo(map)
      //     .bindPopup('The bus right here');
      //   console.log(parsed_data)
      // }
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
