import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  template: `
    <main class="d-flex">
      <app-navbar class="sidebar"></app-navbar>
      <section class="content flex-fill">
        <router-outlet></router-outlet>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/') {
          this.renderer.removeClass(document.body, 'center-layout');
        } else {
          this.renderer.addClass(document.body, 'center-layout');
        }
      });
  }

  title = 'homes';
}
