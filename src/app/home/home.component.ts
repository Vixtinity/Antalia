import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

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
  imports: [CommonModule, HttpClientModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: Item[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get<Item[]>('/assets/data.json').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error loading data', error);
      }
    );
  }
}
