import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Structure du formulaire de connexion
  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  isSubmitted = false;
  isLogining = false;

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private localStore: LocalStorageService
  ) { }

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.isLogining = true;
      const email = this.contactForm.get('email')?.value;
      const password = this.contactForm.get('password')?.value;

      if (email && password) { // Vérifiez si email et password sont définis
        this.authService.login(email, password)
          .then((credentials) => {
            // Redirection vers la page du tableau de bord après une connexion réussie
            if (credentials.user) {
              this.localStore.saveData('auth-token', credentials.user.uid)
            }
            this.router.navigate(['/profil']);
            this.toastrService.success(`Connexion réussi`)
          })
          .catch((error) => {
            this.isLogining = false;

            this.toastrService.error(`Connexion impossible`)
            console.error('Erreur de connexion :', error);
            // Gérer les erreurs d'authentification ici, par exemple, afficher un message d'erreur.
          });
      }
    }
  }

}
