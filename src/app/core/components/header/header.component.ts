import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { AuthService } from 'src/app/account/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  panier_length: number = 0;
  isAuth: any;
  constructor(private panierService: PanierService, private afAuth: AuthService, private toastrService : ToastrService, private localStorage : LocalStorageService, private router : Router) { }
  ngOnInit() {
    this.panierService.getSharedVariable().subscribe(value => {
      this.panier_length = value;
    });
    this.afAuth.getAuthState().subscribe(value => {
      this.isAuth = value;
    });
  }

  Logout() {
    this.localStorage.removeData('auth-token')
    this.toastrService.success(`Déconnecté`)
    this.router.navigate(['/authentification']);
    return this.afAuth.logout()
  }

}
