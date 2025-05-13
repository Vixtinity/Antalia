import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subir-elemento',
  standalone: true,
  templateUrl: './subir-elemento.component.html',
  imports: [CommonModule, FormsModule],
})
export class SubirElementoComponent {
  usuarios: any[] = [];
  nuevoElemento: any = {
    title: '',
    description: '',
    user: '',
    userId: null,
    imageUrl: ''
  };

  constructor() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    fetch('http://localhost:3000/api/usuarios')
      .then(res => res.json())
      .then(data => this.usuarios = data);
  }

  asignarUserId() {
    const usuarioSeleccionado = this.usuarios.find(u => u.name === this.nuevoElemento.user);
    this.nuevoElemento.userId = usuarioSeleccionado?.id || null;
  }

  onFileChange(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      this.nuevoElemento.imageUrl = 'img/' + archivo.name; // Asumes que ya subiste la imagen al backend por separado
    }
  }

  onSubmit() {
    fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.nuevoElemento)
    })
    .then(res => res.json())
    .then(data => {
      alert('Imagen subida con éxito');
      console.log(data);
    });
  }
}
