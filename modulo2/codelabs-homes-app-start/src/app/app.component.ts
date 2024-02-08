import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-name">
      <img class="brand-logo" src="../assets/logo.svg" alt="logo">
    </header>
  </main>
  <section class="content">
    <app-home></app-home>
  </section>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
