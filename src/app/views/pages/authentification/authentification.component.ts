import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  loginIsVisible = true;
  registerIsVisible = false;
  showRegisterForm() {
    this.registerIsVisible = !this.registerIsVisible
    this.loginIsVisible = !this.loginIsVisible
  }
}
