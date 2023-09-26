import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database/services/database.service';
import { Observable } from 'rxjs';
import { user } from 'src/app/models/user';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private db: DatabaseService, private cookieService: CookieService, private afAuth: AuthService, private localStore: LocalStorageService) { }
  user$!: Observable<user>
  uid = this.cookieService.get('auth-uid')
  local_uid: string = ''

  ngOnInit() {
    this.local_uid = localStorage.getItem('auth-token') || ''

    this.user$ = this.db.retrieveUser(this.uid);
    this.user$.subscribe(user => {
      if (user) {
        console.log(user);
      } else {
        console.log('Utilisateur non trouvé');
      }
    });
  }
}
