import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Structure Contact Form
  contactForm = this.fb.group({
    user_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', Validators.required],
    object: ['', Validators.required],
    message: ['', Validators.required],
  })

  isSubmited = false

  onSubmit() {
    console.log(this.contactForm.value, this.contactForm.invalid);
    this.isSubmited = true
    if (this.contactForm.valid) {
      const form = document.getElementById('contact-form') as HTMLFormElement;

      emailjs.sendForm('service_bmhgihw', 'template_joy5ipj', form, 'tI_GYCmxxx1ocbTk6')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error: { text: any; }) => {
          console.log(error.text);
        });
    }
  }
  constructor(private fb: FormBuilder) { }

}
