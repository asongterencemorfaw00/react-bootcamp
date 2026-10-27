import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header><h1>{{ title }}</h1></header>`
})
export class HeaderComponent {
  @Input() title = '';
}
