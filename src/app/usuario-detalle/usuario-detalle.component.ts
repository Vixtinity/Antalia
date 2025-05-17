// src/app/usuario-detalle/usuario-detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioDetalleService, Usuario } from '../services/services/usuario-detalles.service';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioDetalleService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.usuarioService.getUsuarioById(id).subscribe(
        (data) => this.usuario = data,
        (error) => console.error('Error al cargar el usuario:', error)
      );
    } else {
      console.error('No se encontró el ID del usuario en la URL');
    }
  }
}
