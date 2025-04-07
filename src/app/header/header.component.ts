import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
