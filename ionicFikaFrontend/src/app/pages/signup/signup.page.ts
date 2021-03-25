import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public user = {
    username: '',
    email: '',
    prefPlatform: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginAction(){
    this.user.email='';
    this.user.password='';
    this.user.prefPlatform='';
    this.router.navigate(['signup']);
  }

  mainAction(){
    this.router.navigate(['choose-platform']);
  }

}
