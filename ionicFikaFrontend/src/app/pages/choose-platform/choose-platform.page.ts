import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-platform',
  templateUrl: './choose-platform.page.html',
  styleUrls: ['./choose-platform.page.scss'],
})
export class ChoosePlatformPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  choosePlatAction(plat: string){
    switch(plat){
      case "noPref":
        this.router.navigateByUrl('choose-route', {state:{
          'Platform' : 'none'
      }});
      case "Pref":
        this.router.navigateByUrl('choose-route', {state:{
          'Platform' : 'userPref'
      }});
      case "Wits":
        this.router.navigateByUrl('choose-route', {state:{
          'Platform' : 'Wits'
      }});
    }
  }

}
