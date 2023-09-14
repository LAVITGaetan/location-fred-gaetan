import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database/services/database.service';
import { Observable } from 'rxjs';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  user$!: Observable<user>
  constructor(private db: DatabaseService) { }
  ngOnInit() {
    const uid = '9JXlDzImaDWlqKwTaTYeNKWInef1'
    this.user$ = this.db.retrieveUser(uid);
    this.user$.subscribe(user => {
      if (user) {
        console.log(user);
      } else {
        console.log('Utilisateur non trouvé');
      }
    });
  }
}
