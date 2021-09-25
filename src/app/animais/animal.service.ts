import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../autenticacao/token.service';
import { Observable } from 'rxjs';
import { Animais } from './animal.interface';
import { environment } from '../../environments/environment';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) {}

  listaDeUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}
