import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isSubmitted: boolean = false;
  registerForm: FormGroup;
  errorMessage = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private fireStorage: AngularFireStorage) {

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

  async onFileChange(event: any) {
    const file = event.target.files[0]
    const DOM_image = document.getElementById('image-preview')
    if(file) {
      const path =`preview/${file.name}`
      const uploadTask = await this.fireStorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL()
      DOM_image?.setAttribute('src', url)
    }
  }
  
  onSubmit() {
    this.isSubmitted = true
    console.log(this.registerForm.valid, this.registerForm);

    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;

      if (email && password) {
        this.authService.register(email, password)
          .then(() => {
            // Redirection vers la page de connexion après une inscription réussie
            this.router.navigate(['']);
            console.log('Inscription réussie');
          })
          .catch((error) => {
            console.error('Erreur d\'inscription :', error);
            // Vérifiez si l'erreur est due à une adresse e-mail déjà utilisée
            if (error.code === 'auth/email-already-in-use') {
              this.errorMessage = 'Cette adresse e-mail est déjà utilisée par un autre compte.';
            } else {
              this.errorMessage = 'Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer plus tard.';
            }
          });
      }
    }
  }

}
