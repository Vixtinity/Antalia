// imagen-detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagenDetalleService, Imagen } from '../services/imagen-detalles.service';

@Component({
  selector: 'app-imagen-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './imagen-detalle.component.html',
  styleUrls: ['./imagen-detalle.component.css']
})
export class ImagenDetalleComponent implements OnInit {
  imagen: Imagen | null = null;

  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenDetalleService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.imagenService.getImagenById(id).subscribe(
        (data) => this.imagen = data,
        (error) => console.error('Error al cargar la imagen:', error)
      );
    } else {
      console.error('No se encontró el ID de la imagen en la URL');
    }
  }
}
