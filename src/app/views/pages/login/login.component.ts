import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
constructor(private fb: FormBuilder) { }

onSubmit() {
  this.isSubmitted = true;


  if (this.contactForm.valid) {
    const email = this.contactForm.get('email')?.value;
    const password = this.contactForm.get('password')?.value;

    if (email && password) { 
      // logique connexion
    }
  }
}
}
