import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  goToSection(sectionId: string): void {
    // Ensure the use of ViewportScroller for Angular's recommended approach
    const element = document.getElementById(sectionId);
    if (element) {
      // Use smooth scroll with a slight delay to ensure rendering
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0.5);
    }
  }

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
