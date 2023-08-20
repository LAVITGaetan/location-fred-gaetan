import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_bmhgihw', 'template_joy5ipj', e.target as HTMLFormElement, 'tI_GYCmxxx1ocbTk6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }
}
