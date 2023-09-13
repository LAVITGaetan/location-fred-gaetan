import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  panier_length: number = 0;
  isAuth : boolean = false;
  constructor(private panierService: PanierService, private afAuth: AuthService) { }
  ngOnInit() {
    this.panierService.getSharedVariable().subscribe(value => {
      this.panier_length = value;
    });
    this.isAuth = this.afAuth.isAuthenticated()
    console.log('authentified');
    console.log(this.isAuth);
  }

  Logout() {
    this.isAuth = false
    return this.afAuth.logout()
  }

}
