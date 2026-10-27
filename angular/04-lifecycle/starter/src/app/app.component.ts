// MODULE 04 — Angular Lifecycle Hooks
// =====================================
// Build a live country search using Angular lifecycle hooks.
//
// STEP 1: Create a 'query' signal for the search input
// STEP 2: Create countries, loading, error signals
// STEP 3: Use effect() to watch 'query' and fetch when length >= 2
// STEP 4: Inject HttpClient and call the REST Countries API
// STEP 5: Implement ngOnDestroy to cancel any in-flight requests

import { Component, signal, effect, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Country {
  name: { common: string };
  flags: { emoji: string };
  population: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <h1>🌍 Country Search</h1>
      <input [(ngModel)]="query" placeholder="Search countries..." class="search-input" />
      @if (loading()) { <p class="status">Searching...</p> }
      @if (error()) { <p class="error">{{ error() }}</p> }
      <div class="results">
        <!-- TODO: render country cards with @for -->
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  // TODO: These signals should update as the user searches
  query = signal('');
  countries = signal<Country[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {
    // TODO: Add effect() to fetch when query changes
  }

  ngOnDestroy() {
    // TODO: Cancel any in-flight request
  }
}
