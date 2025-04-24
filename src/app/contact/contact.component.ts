import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  isSubmitting = false;
  isSent = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.sendEmail();
        this.isSent = true;
        this.isSubmitting = false;

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          this.isSent = false;
        }, 10000);

        this.contactForm.reset();
      }, 2000);
    }
  }

  sendEmail() {
    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value || '');
    formData.append('email', this.contactForm.get('email')?.value || '');
    formData.append('subject', this.contactForm.get('subject')?.value || '');
    formData.append('message', this.contactForm.get('message')?.value || '');
    formData.append('_subject', 'New Project Inquiry'); // Subject for FormSubmit
    formData.append('_captcha', 'false'); // Disable CAPTCHA

    fetch('https://formsubmit.co/emailpost.sendtome@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          this.isSubmitting = false;
          this.isSent = true;

          // Auto-hide success message after 10 seconds
          setTimeout(() => {
            this.isSent = false;
          }, 10000);

          this.contactForm.reset();
        } else {
          throw new Error('Email sending failed');
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        this.isSubmitting = false;
      });
  }
}
