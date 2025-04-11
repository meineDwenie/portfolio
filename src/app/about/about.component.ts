import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private routerSubscription: Subscription | null = null;
  private readonly COMPONENT_ID = 'about-component';

  constructor(
    private router: Router,
    private animationService: AnimationService
  ) {}

  ngAfterViewInit(): void {
    // Initial setup
    this.setupAnimations();

    // Listen for route changes
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reset animations when navigating back to this component
        this.setupAnimations();
      });
  }

  ngOnDestroy(): void {
    // Clean up observer and subscription when component is destroyed
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.animationService.cleanupObserver(this.COMPONENT_ID);
  }

  setupAnimations(): void {
    this.animationService.setupAnimations(
      this.COMPONENT_ID,
      '.aboutchild h3, .aboutchild p, .experience-numbers, .experience-block, .download-social-container'
    );
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
