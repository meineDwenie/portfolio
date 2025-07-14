import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/main/main.component').then((m) => m.MainComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./pages/experience/experience.component').then(
            (m) => m.ExperienceComponent
          ),
      },
      {
        path: 'service',
        loadComponent: () =>
          import('./pages/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills/skills.component').then(
            (m) => m.SkillsComponent
          ),
      },
      {
        path: 'works',
        loadComponent: () =>
          import('./pages/works/works.component').then((m) => m.WorksComponent),
      },
    ],
  },
];
