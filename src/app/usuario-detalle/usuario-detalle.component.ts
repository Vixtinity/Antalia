import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioDetalleService, Usuario } from '../services/services/usuario-detalles.service';
import { ImagenDetalleService, Imagen } from '../services/imagen-detalles.service';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  usuario: Usuario | null = null;
  imagenesUsuario: Imagen[] = [];

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioDetalleService,
    private imagenService: ImagenDetalleService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.usuarioService.getUsuarioById(id).subscribe(
        (usuarioData) => {
          this.usuario = usuarioData;
          this.imagenService.getImagenes().subscribe(
            (imagenes) => {
              this.imagenesUsuario = imagenes.filter(img => img.userId === id);
            },
            (error) => console.error('Error al cargar las imágenes:', error)
          );
        },
        (error) => console.error('Error al cargar el usuario:', error)
      );
    } else {
      console.error('No se encontró el ID del usuario en la URL');
    }
  }
}
