import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animais, Animal } from './animal.interface';
import { environment } from '../../environments/environment';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(
    private httpClient: HttpClient,
  ) // private tokenService: TokenService,
  {}

  listaDeUsuario(nomeDoUsuario: string): Observable<Animais> {
    // Foi substituído pelo AutenticacaoInterceptor
    // const token = this.tokenService.retornaToken();
    // const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      // headers,
    });
  }

  buscaPorId(id: number): Observable<Animal> {
    // Foi substituído pelo AutenticacaoInterceptor
    // const token = this.tokenService.retornaToken();
    // const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animal>(`${API}/photos/${id}`, {
      // headers,
    });
  }
}
