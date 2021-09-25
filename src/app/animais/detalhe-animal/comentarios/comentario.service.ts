import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario, Comentarios } from './comentario.interface';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private httpClient: HttpClient) {
  }

  buscarComentarios(id: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  incluirComentario(id: number, commentText: string): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText
    })
  }
}
