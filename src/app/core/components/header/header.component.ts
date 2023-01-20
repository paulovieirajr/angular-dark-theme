import { Component, Renderer2 } from '@angular/core';
import { ETheme } from '../../enums/etheme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public textTheme: ETheme = ETheme.TEXT_DARK;
  public icon: ETheme = ETheme.ICON_MOON;

  public toogleTheme() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = ETheme.ICON_SUN;
      this.textTheme = ETheme.TEXT_LIGHT;
    }
    else {
      this.icon = ETheme.ICON_MOON;
      this.textTheme = ETheme.TEXT_DARK;
    }
  }
}
