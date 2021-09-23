import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';

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
  }: NovoUsuario): Observable<NovoUsuario> {
    return this.httpCliente.post<NovoUsuario>(
      'http://localhost:3000/user/signup',
      {
        email,
        fullName,
        userName,
        password,
      },
    );
  }

  verificaSeUsuarioExiste(nomeUsuario: string): Observable<NovoUsuario> {
    return this.httpCliente.get<NovoUsuario>(
      `http://localhost:3000/user/exists/${nomeUsuario}`,
    );
  }
}
