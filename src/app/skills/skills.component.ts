import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AnimationService } from '../services/animation.service';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  activeTab: 'hard' | 'soft' = 'hard';
  private routerSubscription: Subscription | null = null;
  private readonly COMPONENT_ID = 'skills-component';

  constructor(
    private router: Router,
    private animationService: AnimationService
  ) {}

  hardSkills = [
    { name: 'Angular', level: 70, icon: 'assets/images/angular_icon.png' },
    { name: 'Unity', level: 89, icon: 'assets/images/unity_icon.png' },
    { name: 'Figma', level: 92, icon: 'assets/images/figma_icon.png' },
    {
      name: 'Android Studio',
      level: 60,
      icon: 'assets/images/android_studio_icon.png',
    },
    { name: '.NET', level: 65, icon: 'assets/images/dotnet_icon.png' },
    { name: 'Bootstrap', level: 85, icon: 'assets/images/bootstrap_icon.png' },
    {
      name: 'Responsive Design',
      level: 80,
      icon: 'assets/images/responsive_icon.png',
    },
    {
      name: 'TypeScript',
      level: 70,
      icon: 'assets/images/typescript_icon.png',
    },
    { name: 'HTML', level: 90, icon: 'assets/images/html_icon.png' },
    { name: 'CSS', level: 85, icon: 'assets/images/css_icon.png' },
    {
      name: 'JavaScript',
      level: 75,
      icon: 'assets/images/javascript_icon.png',
    },

    // Additional Hard Skills
    {
      name: 'REST API Integration',
      level: 80,
      icon: 'assets/images/api_rest.png',
    },
    {
      name: 'C#',
      level: 68,
      icon: 'assets/images/c_sharp.png',
    },
    {
      name: 'Scrum',
      level: 75,
      icon: 'assets/images/scrum.png',
    },
    {
      name: 'Git / GitHub',
      level: 85,
      icon: 'assets/images/github_icon.png',
    },
  ];

  /*
  softSkills: string[] = [
    'Creativity',
    'Empathy and active listening',
    'Critical thinking and problem-solving',
    'Time management and organization',
    'Adaptability and learning agility',
    'Collaboration and teamwork',
    'Public speaking and presentation',
    'Attention to detail',
    'Cultural awareness and sensitivity',
    'Patience and resilience',
    'Team-work oriented',
    'Communication',
    'Administer exams',
    'Understand written Spanish',
    'Understand spoken Spanish',
    'Write Spanish',
    'Interact verbally in Spanish',
    'Terminology',
    'Good listener and communicator',
  ];
  */

  ngAfterViewInit(): void {
    this.setupAnimations();

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setupAnimations();
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.animationService.cleanupObserver(this.COMPONENT_ID);
  }

  setupAnimations(): void {
    this.animationService.setupAnimations(
      this.COMPONENT_ID,
      '.skills-parent h3, .skills-left h4, .skills-left p, .skills-buttons button, .skills-card'
    );
  }

  switchTab(tab: 'hard' | 'soft') {
    this.activeTab = tab;
  }
}
