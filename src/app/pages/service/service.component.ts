import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AnimationService } from '../../core/services/animation.service';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServiceTranslation {
  TITLE: string;
  DESCRIPTION: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent implements AfterViewInit, OnDestroy {
  private routerSubscription: Subscription | null = null;
  private readonly COMPONENT_ID = 'service-component';

  services: Service[] = [];

  constructor(
    private translate: TranslateService,
    private router: Router,
    private animationService: AnimationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const icons = ['bi-code-slash', 'bi-laptop', 'bi-phone', 'bi-palette'];

    this.translate.stream('SERVICES.LIST').subscribe((translated) => {
      const services = translated as ServiceTranslation[];
      this.services = services.map(
        (service: ServiceTranslation, index: number) => ({
          icon: icons[index] || 'bi-info-circle',
          title: service.TITLE,
          description: service.DESCRIPTION,
        })
      );

      // Trigger change detection to update the view
      this.cdr.detectChanges();

      this.setupAnimations();
    });

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
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.animationService.cleanupObserver(this.COMPONENT_ID);
  }

  private setupAnimations(): void {
    this.animationService.setupAnimations(
      this.COMPONENT_ID,
      '#service h3, .service-card'
    );
  }
}
