import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experience: ExperienceItem[] = [
    {
      years: '2025',
      position: 'EXPERIENCE.POSITIONS.FRONTEND_DEVELOPER_TRAINEE',
      company: 'EXPERIENCE.COMPANIES.NEORIS',
    },
    {
      years: '2019-2022',
      position: 'EXPERIENCE.POSITIONS.ENGLISH_LANGUAGE_ASSISTANT',
      company: 'EXPERIENCE.COMPANIES.SPANISH_MINISTRY_OF_EDUCATION',
    },
    {
      years: '2017-2019',
      position: 'EXPERIENCE.POSITIONS.ESL_TUTOR',
      company: 'EXPERIENCE.COMPANIES.QQ_ENGLISH',
    },
    {
      years: '2014-2018',
      position: 'EXPERIENCE.POSITIONS.STUDENT_ASSISTANT',
      company: 'EXPERIENCE.COMPANIES.CEBU_NORMAL_UNIVERSITY',
    },
  ];

  education: EducationItem[] = [
    {
      years: '2023-2025',
      course: 'EXPERIENCE.COURSES.MULTIPLATFORM_APPLICATION_DEVELOPMENT',
      school: 'EXPERIENCE.SCHOOLS.IES_ALFONSO_X_EL_SABIO',
    },
    {
      years: '2013-2017',
      course:
        'EXPERIENCE.COURSES.BACHELOR_OF_SECONDARY_EDUCATION_MAJOR_IN_ENGLISH',
      school: 'EXPERIENCE.SCHOOLS.CEBU_NORMAL_UNIVERSITY',
    },
  ];
}
