import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent {
  services: Service[] = [
    {
      icon: 'bi-code-slash',
      title: 'Frontend Development',
      description:
        'Creating responsive and interactive UI with modern frameworks.',
    },
    {
      icon: 'bi-laptop',
      title: 'Website Application Development',
      description: 'Building full-featured websites with backend integration.',
    },
    {
      icon: 'bi-phone',
      title: 'Mobile App Development',
      description: 'Developing cross-platform apps with smooth performance.',
    },
    {
      icon: 'bi-palette',
      title: 'UX / UI Designs',
      description:
        'Designing intuitive user interfaces and seamless experiences.',
    },
  ];
}
