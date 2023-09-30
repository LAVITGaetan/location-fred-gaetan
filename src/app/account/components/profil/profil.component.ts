import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database/services/database.service';
import { Observable } from 'rxjs';
import { user } from 'src/app/models/user';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private route: Router,
    private toastrService: ToastrService,
    private db: DatabaseService,
    private afAuth: AuthService,) { }
  user$!: Observable<user>
  local_uid: string = ''

  ngOnInit() {
    console.log(this.afAuth.isAuthenticated());
    this.local_uid = localStorage.getItem('auth-token') || ''

    // Si l'utilisateur est connecté
    if (this.afAuth.isAuthenticated()) {
      // Récupération des données depuis Firestore
      this.user$ = this.db.retrieveUser(this.local_uid);
      this.user$.subscribe(user => {
        // Si l'utilisateur existe
        if (user) {
          console.log(user);
        } else {
          console.log('user data not found');
          // this.redirectToLogin()
        }
      });
    }
    // Si l'utilisateur n'est pas connecté
    else {
      this.redirectToLogin()
    }
  }

  redirectToLogin() {
    this.toastrService.error('Veuillez vous connecter pour accèder à cette page')
    this.route.navigate(['/authentification'])
  }
}
