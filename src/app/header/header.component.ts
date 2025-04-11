import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'BIO' },
    { id: 'works', label: 'WORKS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    //{ id: 'contact', label: 'CONTACT'},
  ];

  // Flag for showing/hiding certain elements (for demonstration)
  showContactButton = true;
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  handleNavClick(sectionId: string): void {
    this.goToSection(sectionId);
    this.isMenuActive = false;
  }

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
}
