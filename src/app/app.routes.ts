import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagenDetalleComponent } from './imagen-detalle/imagen-detalle.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { SubirElementoComponent } from './subir-elemento/subir-elemento.component';

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
    component: UsuarioDetalleComponent,
    data: { renderMode: 'client' }
  },
  {
    path: 'subirelemento',
    loadComponent: () => import('./subir-elemento/subir-elemento.component').then(m => m.SubirElementoComponent)
  },
  {
  path: 'usuario/:id',
  component: UsuarioDetalleComponent,
  data: { renderMode: 'client' }
  },
  {
    path: '**',
    redirectTo: ''
  },
];
