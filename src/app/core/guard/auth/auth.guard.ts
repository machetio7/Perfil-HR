import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  logging: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    if (this._authService.isAuth()) {
      this.logging = true;
    } else {
      this._router.navigate(['/']);
      return false;
    }

    return this.logging;
  }
}
