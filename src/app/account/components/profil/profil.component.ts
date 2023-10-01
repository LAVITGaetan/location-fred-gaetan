import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database/services/database.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/database/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private route: Router,
    private toastrService: ToastrService,
    private db: DatabaseService,
    private userService: UserService,
    private afAuth: AuthService,) { }

  user$!: Observable<User>
  local_uid: string = ''
  isSubmited = false

  profilForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl()
  })
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

          this.profilForm.get('first_name')?.setValue(user.first_name)
          this.profilForm.get('last_name')?.setValue(user.last_name)
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

  submitForm() {
    this.isSubmited = true
    const newData = this.profilForm.value
    this.userService.editUser(this.local_uid, newData)
    this.toastrService.success('Vos données ont été mises à jour')

    this.isSubmited = false
  }

}
