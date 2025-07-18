import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    LanguageSelectorComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = [
    { id: 'home', label: 'HEADER.NAV.HOME' },
    { id: 'about', label: 'HEADER.NAV.BIO' },
    { id: 'service', label: 'HEADER.NAV.SERVICES' },
    { id: 'works', label: 'HEADER.NAV.WORKS' },
    { id: 'skills', label: 'HEADER.NAV.SKILLS' },
    { id: 'experience', label: 'HEADER.NAV.EXPERIENCE' },
    //{ id: 'contact', label: 'CONTACT'},
  ];

  // Flag for showing/hiding certain elements (for demonstration)
  showContactButton = true;
  isMenuActive = false;
  isClicked = false;
  languageDropdownOpen = false;
  currentLang: string = 'en';

  constructor(private translate: TranslateService, private eRef: ElementRef) {
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.languageDropdownOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  handleNavClick(sectionId: string): void {
    this.goToSection(sectionId);
    this.isMenuActive = false;

    // Add clicked animation
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 200);
    
  }

  toggleLanguageDropdown() {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.languageDropdownOpen = false;
  }

  goToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll w/ a slight delay to ensure rendering
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0.5);
    }
  }
}
