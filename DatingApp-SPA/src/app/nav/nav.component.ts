import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={}

  constructor(public authServive: AuthService,
              private alertifyService : AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authServive.login(this.model).subscribe(next => {
      this.alertifyService.success('logged in successfully!');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  loggedIn(){
    return this.authServive.loggedIn();
  }

  logout(){
localStorage.removeItem('token');
this.alertifyService.message('logged out');
  }
}
