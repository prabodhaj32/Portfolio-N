import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
   standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = { name: '', email: '', message: '' };
  successMessage = '';
  errorMessage = '';

  async sendMessage() {
    try {
      // Replace with your EmailJS credentials
      const result = await emailjs.send(
        'service_92wgtnl', // Your EmailJS service ID
        'template_q5mbbkj', // Your EmailJS template ID
        {
          from_name: this.contactData.name,
          from_email: this.contactData.email,
          message: this.contactData.message,
        },
        'ZYoimIBH4jnsJ78Gm' // Your EmailJS public key
      );

      if (result.status === 200) {
        this.successMessage = '✅ Message sent successfully!';
        this.errorMessage = '';
        this.contactData = { name: '', email: '', message: '' }; // Reset form
      }
    } catch (error) {
      this.errorMessage = '❌ Failed to send message. Please try again.';
      this.successMessage = '';
    }
  }
}