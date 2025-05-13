import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';  // Necesitas importar RouterLink
import { CommonModule } from '@angular/common';  // Importación estándar
@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
