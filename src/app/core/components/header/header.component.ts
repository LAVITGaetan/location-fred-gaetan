import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { AuthService } from 'src/app/account/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/database/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  panier_length: number = 0;
  isAuth: any;
  user$!: Observable<User>
  uid: string = ''
  short_name: string = ''

  constructor(private userService: UserService, private panierService: PanierService, private afAuth: AuthService, private toastrService: ToastrService, private localStorage: LocalStorageService, private router: Router) { }
  ngOnInit() {
    this.uid = localStorage.getItem('auth-token') || ''
    if (this.uid !== '') {
      // Récupération des données depuis Firestore
      this.user$ = this.userService.retrieveUser(this.uid);
      this.user$.subscribe(user => {
        if (user) {
          this.short_name = `${user.first_name.charAt(0)}.${user.last_name.charAt(0)}`
        }
      })
    }


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
