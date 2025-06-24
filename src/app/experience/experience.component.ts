import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  years: string;
  position: string;
  company: string;
}

interface EducationItem {
  years: string;
  course: string;
  school: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experience: ExperienceItem[] = [
    {
      years: '2025 - Present',
      position: 'Frontend Developer Trainee',
      company: 'NEORIS',
    },
    {
      years: '2019-2022',
      position: 'English Language Assistant',
      company: 'Spanish Ministry of Education (Murcia Region)',
    },
    {
      years: '2017-2019',
      position: 'ESL Tutor',
      company: 'QQ English Seafront Campus, Online-Offline English Teaching',
    },
    {
      years: '2014-2018',
      position: 'Student Assistant',
      company:
        'Cebu Normal University, Center for Testing, Evaluation and Development',
    },
  ];

  education: EducationItem[] = [
    {
      years: '2023-2025',
      course: 'Multiplatform Application Development',
      school: 'IES Alfonso X El Sabio, Murcia, Spain',
    },
    {
      years: '2010-2014',
      course: 'Bachelor of Secondary Education Major in English',
      school: 'Cebu Normal University',
    },
  ];
}
