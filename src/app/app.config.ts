import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { AnimationService } from './core/services/animation.service';
import { provideTranslateLoader } from './core/services/translate.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    AnimationService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideTranslateLoader(),
  ],
};
