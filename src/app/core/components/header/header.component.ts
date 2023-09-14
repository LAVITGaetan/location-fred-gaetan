import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { AuthService } from 'src/app/account/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  panier_length: number = 0;
  isAuth: any;
  constructor(private panierService: PanierService, private afAuth: AuthService, private toastrService : ToastrService) { }
  ngOnInit() {
    this.panierService.getSharedVariable().subscribe(value => {
      this.panier_length = value;
    });
    this.afAuth.getAuthState().subscribe(value => {
      this.isAuth = value;
    });
  }

  Logout() {
    this.toastrService.success(`Déconnecté`)
    return this.afAuth.logout()
  }

}
