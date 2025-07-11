import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    // Add languages to the translation service
    this.translate.addLangs(['en', 'es']);

    // Set the default language to English
    this.translate.setDefaultLang('en');

    // Use browser language if available and supported, else default to English
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
  }
}
