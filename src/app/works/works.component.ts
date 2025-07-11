import { ChangeDetectionStrategy } from '@angular/core';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent {
  private routerSubscription: Subscription | null = null;
  private readonly COMPONENT_ID = 'works-component';

  currentIndex = 0;

  works = [
    {
      category: 'Web App - Full Stack',
      title: 'Tradie',
      description:
        'A robust, responsive online shopping platform with product variety, admin dashboard, and full e-commerce functionality including payment integration.',
      tech: 'ASP.NET Core, MVC, C#, Visual Studio Code, Azure, PayPal, SQL Server Management Studio, HTML, CSS, JavaScript, Bootstrap, jQuery',
      image: 'assets/images/tradie.png',
      link: 'https://tradie-c6exdkcfced4hegj.spaincentral-01.azurewebsites.net/',
      github: 'https://github.com/frannjmnzz2/Tradie',
      figma: '',
    },
    {
      category: 'Web App - Frontend',
      title: 'Instituthree Academy',
      description:
        'An educational web app featuring secure user registration and login, as well as advanced role and permission management for admins.',
      tech: 'Angular, Angular Material, REST API, NgRx, Reactive Forms, Components Development, HTML, CSS, TypeScript, VS Code',
      image: 'assets/images/instituthree.png',
      link: 'https://meinedwenie.github.io/instituthree/authentication',
      github: 'https://github.com/meineDwenie/instituthree',
      figma: '',
    },
    {
      category: 'Mobile App - Full Stack',
      title: 'SenecDates',
      description:
        'A dating mobile app specially designed for seniors 60+, featuring intuitive navigation and profile matching.',
      tech: 'Unity, C#, PlayerPrefs, Google Play',
      image: 'assets/images/senecdates.png',
      link: 'https://play.google.com/apps/test/com.CascadeGroupsCor.senecDates/13',
      github: '',
      figma: '',
    },
    {
      category: 'Mobile App - Full Stack',
      title: 'NabClub',
      description:
        'An innovative sticker store mobile app where customers can send images to be turned into personalized stickers.',
      tech: 'Java, JavaFX, Figma',
      image: 'assets/images/nabclub.png',
      link: '',
      github: '',
      figma:
        'https://www.figma.com/proto/w9IYbJGdvoPoBFgTRN4NKV/NAB-CLUB--Tienda-de-Pegatinas-?node-id=0-1&t=OvrefJR5RxKZVbJq-1',
    },
    {
      category: 'UI / UX Design',
      title: 'Sprinter Reimagined',
      description:
        'A modernized mobile UI/UX design concept for a sports shoe e-commerce store.',
      tech: 'Figma',
      image: 'assets/images/sprinter.png',
      link: '',
      github: '',
      figma:
        'https://www.figma.com/proto/VqmSEUJudLKK274rUVx7ql/Shoe-App--Copy-?node-id=0-1&t=eBQOsNXKMUu3PJRM-1',
    },
    {
      category: 'UI / UX Design',
      title: 'Fruitapi',
      description:
        'A refreshing and interactive UI design for a juice and fruit-based online shop.',
      tech: 'Figma',
      image: 'assets/images/fruitapi.png',
      link: '',
      github: '',
      figma:
        'https://www.figma.com/proto/NhaJki8xkmGuv4fChNQSbl/Tin-Can-Dynamic?node-id=0-1&t=tsPvmM2WTBsurvbE-1',
    },
    {
      category: 'UI / UX Design',
      title: 'Smoothies',
      description:
        'Landing and menu design for a fun and vibrant smoothie shop. Includes interactive components and mobile-first layout.',
      tech: 'Figma',
      image: 'assets/images/smoothie.png',
      link: '',
      github: '',
      figma:
        'https://www.figma.com/proto/VINOe1SMDevnvjUViVTqWQ/Smoothies?node-id=0-1&t=rNDyl02KVRFWrYL6-1',
    },
    {
      category: 'Web App - Full Stack',
      title: 'Edwin. Portfolio',
      description:
        'A personal developer portfolio showcasing skills, technologies, and work history in a sleek, responsive layout.',
      tech: 'Angular, TypeScript, Bootstrap, HTML, CSS, VS Code',
      image: 'assets/images/portfolio.png',
      link: 'https://meinedwenie.github.io/portfolio/',
      github: 'https://github.com/meineDwenie/portfolio',
      figma: '',
    },
  ];

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
      '#works h3, .works-details, .img-container, .action-buttons'
    );
  }

  get currentWork() {
    return this.works[this.currentIndex];
  }

  nextWork() {
    this.currentIndex = (this.currentIndex + 1) % this.works.length;
  }

  prevWork() {
    this.currentIndex =
      (this.currentIndex - 1 + this.works.length) % this.works.length;
  }
}
