import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = {
    email: '',
    password: ''
  }

  constructor( private router: Router) { 

  }

  mainAction(){

    //check credentials 
    this.router.navigate(['choose-platform']);
  }

  signupAction(){
    this.router.navigate(['signup']);
  }

  ngOnInit() {
  }

}
