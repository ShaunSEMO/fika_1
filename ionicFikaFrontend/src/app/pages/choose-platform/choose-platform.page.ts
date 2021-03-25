import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-choose-platform',
  templateUrl: './choose-platform.page.html',
  styleUrls: ['./choose-platform.page.scss'],
})
export class ChoosePlatformPage implements OnInit {

  constructor(private router: Router, private service: SharedService) { }

  Platforms:any=[];

  ngOnInit() {
    this.refreshPlatformList();
  }

  // Start choosePlatAction()
  choosePlatAction(plat: string){
    switch(plat){
      case "noPref":
        this.router.navigateByUrl('choose-start-dest', {state:{
          'Platform' : 'none'
      }});
      case "Pref":
        this.router.navigateByUrl('choose-start-dest', {state:{
          'Platform' : 'userPref'
      }});
      case "Wits":
        this.router.navigateByUrl('choose-start-dest', {state:{
          'Platform' : 'Wits'
      }});
    }
  }
  // End choosePlatAction()

  refreshPlatformList() {
    this.service.getPlatforms().subscribe(data=>{
      this.Platforms=data
    });
  }
}
