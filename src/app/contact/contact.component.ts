import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  mensajeEnviado: boolean = false;

  constructor() {}

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5a3qzxg',
        'template_4ibjuer',
        e.target as HTMLFormElement,
        'lYvqPncqohsOlTQ_b'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.mensajeEnviado = true; // Mostrar el mensaje de éxito
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
