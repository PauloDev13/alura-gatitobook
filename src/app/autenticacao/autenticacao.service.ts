import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from './login-usuario';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpCliente: HttpClient) {}

  autenticar({ userName, password }: LoginUsuario): Observable<LoginUsuario> {
    return this.httpCliente.post<LoginUsuario>(
      'http://localhost:3000/user/login',
      {
        userName,
        password,
      },
    );
  }
}
