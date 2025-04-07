import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  downloadCV(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/CV_Edwin_Nunez.pdf');
    link.setAttribute('download', 'CV_Edwin_Nunez.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.appendChild(link);
  }
}
