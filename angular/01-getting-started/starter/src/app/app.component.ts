// MODULE 01 — Getting Started with Angular
// ==========================================
// Your task: Build a simple profile page using Angular components.
//
// STEP 1: Add a title property to this class and display it with {{ }}
// STEP 2: Create a profile object with name, jobTitle, bio, and avatar
// STEP 3: Display the profile in the template using string interpolation
// STEP 4: Create a separate HeaderComponent in header.component.ts
//         and import it into this component's imports array
//
// HINTS:
// - Class properties are accessed in templates with {{ propertyName }}
// - Use [class] binding for dynamic classes
// - Import standalone child components in the imports array

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // add child components here
  template: `
    <div class="container">
      <!-- TODO: Add your header, profile card, and footer here -->
      <p>TODO: Build your profile page here</p>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // TODO: Add your properties here
  title = 'angular-01-getting-started';
}
