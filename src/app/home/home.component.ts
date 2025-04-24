import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // TYping multiple words
  ngAfterViewInit(): void {
    const options = {
      strings: [
        'Frontend Developer',
        'UX/ UI Designer',
        'Web Developer',
        'Mobile App Developer',
      ],
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 1200,
      loop: true,
    };

    new Typed('.typed-text', options);
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
