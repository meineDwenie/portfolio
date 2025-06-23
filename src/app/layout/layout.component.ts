import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    BackToTopComponent,
  ],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
