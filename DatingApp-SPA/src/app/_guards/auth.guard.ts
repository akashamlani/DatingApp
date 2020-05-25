import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authServive: AuthService,
              private alertifyService: AlertifyService,
              private route: Router) { }

  canActivate(): boolean {
    if(this.authServive.loggedIn()){
      return true;
    }

    this.alertifyService.error('Please login to access this page!!!');
    this.route.navigate(['/home']);
    return false;
  }
}
