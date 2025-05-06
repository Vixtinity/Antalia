import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
<main class="d-flex">
  <app-navbar class="sidebar"></app-navbar>
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
