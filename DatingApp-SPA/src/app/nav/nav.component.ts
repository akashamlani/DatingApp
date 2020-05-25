import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={}

  constructor(public authServive: AuthService,
              private alertifyService: AlertifyService,
              private route: Router) { }

  ngOnInit() {
  }

  login(){
    this.authServive.login(this.model).subscribe(next => {
      this.alertifyService.success('logged in successfully!');
    }, error => {
      this.alertifyService.error(error);
    },()=> {
      this.route.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authServive.loggedIn();
  }

  logout(){
localStorage.removeItem('token');
this.alertifyService.message('logged out');
this.route.navigate(['/home']);
  }
}
