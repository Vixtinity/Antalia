import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagenDetalleComponent } from './imagen-detalle/imagen-detalle.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'imagen/:id',
    component: ImagenDetalleComponent,
    data: { renderMode: 'client' }
  },
  {
    path: 'usuario/:id',
    component: UsuarioDetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
