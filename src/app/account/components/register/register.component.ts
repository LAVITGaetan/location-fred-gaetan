import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from 'src/app/database/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  isSubmitted: boolean = false;
  imageIsLoading: boolean = false;
  registerForm: FormGroup;
  isRegistering = false;
  defaultDate: string = new Date().toISOString().split('T')[0];
  image_url: string = 'default'
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private fireStorage: AngularFireStorage, private toastrService: ToastrService, private db: DatabaseService) {

    // Regle de validation customisé
    const isEqualToPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')
      const confirmedPassword = control.get('confirmed_password')

      if (password && confirmedPassword && password?.value != confirmedPassword?.value) {
        return { isNotEqualToPassword: true }
      }
      return null
    }

    // Déclaration du formulaire ReactiveForm
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmed_password: new FormControl(null, [Validators.required]),
    },
      {
        validators: isEqualToPassword
      })
  }

  // Recupération de l'image selectionné et prévisualisation
  async onFileChange(event: any) {
    this.imageIsLoading = true
    const file = event.target.files[0]
    const DOM_image = document.getElementById('image-preview')
    if (file) {
      const path = `preview/${file.name}`
      const uploadTask = await this.fireStorage.upload(path, file)      
      const url = await uploadTask.ref.getDownloadURL()
      DOM_image?.setAttribute('src', url)
      this.image_url = url
      this.imageIsLoading = false
    }
  }

  // Fonction d'envoi du formulaire si valide
  onSubmit() {
    this.isSubmitted = true
    if (this.registerForm.valid) {
      this.isRegistering = true;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;

      if (email && password) {
        this.authService.register(email, password)
          .then((userCredentials) => {
          this.db.getCollection('user').doc(email).set({
            user_id: userCredentials.user?.uid,
            image_url: this.image_url,
            created_at: this.defaultDate,
          })
          })
          .then(() => {
            // Redirection vers la page de connexion après une inscription réussie
            this.isRegistering = false;
            this.router.navigate(['']);
            this.toastrService.success(`Inscription réussi`)
          })
          .catch((error) => {
            this.isRegistering = false;
            console.error('Erreur d\'inscription :', error);
            // Vérifiez si l'erreur est due à une adresse e-mail déjà utilisée
            if (error.code === 'auth/email-already-in-use') {
              this.toastrService.error(`Cette adresse e-mail est déjà utilisée par un autre compte`)
            } else {
              this.toastrService.error(`Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer plus tard.`)
            }
          });
      }

    }
  }

}
