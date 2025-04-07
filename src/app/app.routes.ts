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
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./experience/experience.component').then(
            (m) => m.ExperienceComponent
          ),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./skills/skills.component').then((m) => m.SkillsComponent),
      },
      {
        path: 'works',
        loadComponent: () =>
          import('./works/works.component').then((m) => m.WorksComponent),
      },
    ],
  },
];
