import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from "leaflet";
import * as $ from "jquery";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-choose-route',
  templateUrl: './choose-route.page.html',
  styleUrls: ['./choose-route.page.scss'],
})
export class ChooseRoutePage implements OnInit {

  trip: any;
  private  map: L.Map;
  private trackedRoute = [];
  private currentMapTrack = null;
  
  constructor(private route: ActivatedRoute, private router: Router, private alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.trip = this.router.getCurrentNavigation().extras.state.trip;
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit(){ 
    $(document).ready(function(){ 

    //TODO: retrive live location from the db

    //TODO: get start location from db (long and lat) for map centering
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

      //tracking the bus
      this.trackedRoute = [];

      // TODO: get live location data
      // socket.onmessage = (e) => {
      //   let parsed_data = JSON.parse(e.data);
  
        // if(this.trackedRoute.length > 1){
        //   this.trackedRoute.push({lat: parsed_data['lat'], lng: parsed_data['lon']});
        //   // var polyline = L.polyline(this.trackedRoute, {color: 'blue'});
        //   // polyline.addTo(this.map);
        // }
        // else{
        //   this.trackedRoute.push({lat: parsed_data['lat'], lng: parsed_data['lon']});
        // }
      // }
    }); 
  }
}
