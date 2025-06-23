import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when page is scrolled down 200px or more
    this.isVisible = window.pageYOffset > 200;
  }

  scrollToTop() {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
