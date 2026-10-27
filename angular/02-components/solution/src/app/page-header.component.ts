import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `<div class="page-header"><h1>{{ title }}</h1><p>{{ subtitle }}</p></div>`
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
