import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';  // Importa RouterOutlet
import { HomeComponent } from './home/home.component';
import { SubirElementoComponent } from './subir-elemento/subir-elemento.component';

// Define las rutas directamente en el componente
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subirelemento', component: SubirElementoComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, RouterOutlet], // Importa RouterModule aquí
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
