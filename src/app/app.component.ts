import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
<main class="d-flex">
  <!-- Aquí está el navbar -->
  <app-navbar class="sidebar"></app-navbar>

  <!-- Contenido principal -->
  <section class="content flex-fill">
    <router-outlet></router-outlet>
  </section>
</main>

  `,
  
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
