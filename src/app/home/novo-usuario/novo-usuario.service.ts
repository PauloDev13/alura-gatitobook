import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuarioInterface } from './novo-usuario.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpCliente: HttpClient) {}

  cadastroNovoUsuario({
    email,
    fullName,
    userName,
    password,
  }: NovoUsuarioInterface): Observable<NovoUsuarioInterface> {
    return this.httpCliente.post<NovoUsuarioInterface>(`${API}/user/signup`, {
      email,
      fullName,
      userName,
      password,
    });
  }

  verificaSeUsuarioExiste(
    nomeUsuario: string,
  ): Observable<NovoUsuarioInterface> {
    return this.httpCliente.get<NovoUsuarioInterface>(
      `http://localhost:3000/user/exists/${nomeUsuario}`,
    );
  }
}
