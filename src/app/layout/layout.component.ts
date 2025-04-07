import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { WorksComponent } from '../works/works.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    AboutComponent,
    WorksComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
