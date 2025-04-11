import { ChangeDetectionStrategy } from '@angular/core';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent {
  private routerSubscription: Subscription | null = null;
  private readonly COMPONENT_ID = 'works-component';

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
      '#works h3, #works h4, .works-block, .works-block-web, .works-info, .works-img-container'
    );
  }
}
