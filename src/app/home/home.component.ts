import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';
import { AnimationService } from '../services/animation.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  typedStrings: string[] = [];
  typedInstance!: Typed;
  langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {}

  // TYping multiple words
  ngAfterViewInit(): void {
    this.initializeTypedText();

    // Subscribe to language changes
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      // Destroy the previous instance
      if (this.typedInstance) {
        this.typedInstance.destroy();
      }

      this.initializeTypedText(); // Re-initialize with new language
    });
  }

  initializeTypedText() {
    this.translate.get('HOME.TYPED_TEXTS').subscribe((res: string[]) => {
      this.typedStrings = res;

      const options = {
        strings: this.typedStrings,
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 1200,
        loop: true,
        preStringTyped: (index: number) => {
          const prefixElement = document.querySelector('.prefix-text');
          if (prefixElement) {
            const currentString = this.typedStrings[index];
            prefixElement.textContent = currentString
              .toLowerCase()
              .startsWith('app developer')
              ? this.translate.instant('HOME.PREFIX_TEXT_FEMALE')
              : this.translate.instant('HOME.PREFIX_TEXT_MALE');
          }
        },
      };

      this.typedInstance = new Typed('.typed-text', options);
    });
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

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
