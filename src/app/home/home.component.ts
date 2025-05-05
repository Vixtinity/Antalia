import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  user: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: Item[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
  }
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  loadData() {
    this.http.get<Item[]>('http://localhost:3000/api/data').subscribe(
      (response) => {
        this.shuffleArray(response); // Mezcla los datos aquí
        this.data = response;        // Y luego los asignas
        console.log('Datos cargados (mezclados):', this.data);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }
  
  
}