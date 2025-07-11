import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServiceTranslation {
  TITLE: string;
  DESCRIPTION: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent {
  services: Service[] = [];

  constructor(private translate: TranslateService) {
    const icons = ['bi-code-slash', 'bi-laptop', 'bi-phone', 'bi-palette'];

    this.translate.stream('SERVICES.LIST').subscribe((translated) => {
      const services = translated as ServiceTranslation[];
      this.services = services.map(
        (service: ServiceTranslation, index: number) => ({
          icon: icons[index] || 'bi-info-circle',
          title: service.TITLE,
          description: service.DESCRIPTION,
        })
      );
    });
  }
}
