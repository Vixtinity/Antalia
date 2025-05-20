import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

export interface Item {
  id: number;
  title: string;
  description: string;
  user: string;
  userId: number;
  imageUrl: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgFor, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: Item[] = [];
  searchQuery = '';
  filteredData: Item[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  // Función para mezclar aleatoriamente los elementos de un array
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Cargar los datos del servidor
  loadData() {
    this.http.get<Item[]>('http://localhost:3000/api/data').subscribe(
      (response) => {
        this.shuffleArray(response);
        this.data = response;
        this.filteredData = [...this.data];
        console.log('Datos cargados (mezclados):', this.data);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }


  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
