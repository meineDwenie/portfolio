import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  isClicked = false;

  constructor(private translate: TranslateService) {}

  goToSection(sectionId: string): void {
    // ViewportScroller for Angular's recommended approach
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll with a slight delay to ensure rendering
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0.5);
    }
  }

  downloadCV(): void {
    const lang = this.translate.currentLang;
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');

    if (lang === 'es') {
      link.setAttribute('href', 'assets/files/CV_Edwin_Spanish.pdf');
      link.setAttribute('download', 'CV_Edwin_Spanish.pdf');
    } else {
      link.setAttribute('href', 'assets/files/CV_Edwin_Nunez.pdf');
      link.setAttribute('download', 'CV_Edwin_Nunez.pdf');
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Add clicked animation
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 200);
  }
}
