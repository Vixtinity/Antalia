import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Imagen {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagenDetalleService {
  private apiUrl = 'http://localhost:3000/api/data';

  constructor(private http: HttpClient) { }

  getImagenById(id: number): Observable<Imagen> {
    return this.http.get<Imagen>(`${this.apiUrl}/${id}`);
  }

  getImagenes(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(this.apiUrl);
  }
}

