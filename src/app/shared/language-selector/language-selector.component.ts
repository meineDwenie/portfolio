import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input() color: string = 'white'; // Optional: pass font color

  languageDropdownOpen = false;
  currentLang: string;

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

  toggleLanguageDropdown() {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.languageDropdownOpen = false;
  }

  getLanguageLabel(lang: string): string {
    return lang === 'en' ? 'English' : 'Español';
  }
}
