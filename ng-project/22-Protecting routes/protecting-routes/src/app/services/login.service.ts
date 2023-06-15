import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() {}

  isAuthenticated(): any {
    const authPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 2000);
    });

    return authPromise;
  }
  onLogin() {
    this.isLoggedIn = true;
  }
  onLogout() {
    this.isLoggedIn = false;
  }
}
