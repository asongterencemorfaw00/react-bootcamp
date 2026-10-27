import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

interface Profile { name: string; jobTitle: string; bio: string; avatar: string; }

@Component({
  selector: 'app-root', standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="container">
      <app-header [title]="pageTitle" />
      <div class="card">
        <span class="avatar">{{ profile.avatar }}</span>
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.jobTitle }}</p>
        <p class="bio">{{ profile.bio }}</p>
      </div>
      <footer>ShopSim Training © 2024</footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageTitle = 'ShopSim Training';
  profile: Profile = { name: 'Alice Johnson', jobTitle: 'Junior Software Engineer', bio: "I'm learning React and Angular.", avatar: '👩‍💻' };
}
