import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from './login-usuario';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpCliente: HttpClient,
    private usuarioService: UsuarioService,
  ) {}

  autenticar({
    userName,
    password,
  }: LoginUsuario): Observable<HttpResponse<LoginUsuario>> {
    return this.httpCliente
      .post<LoginUsuario>(
        `${API}/user/login`,
        {
          userName,
          password,
        },
        { observe: 'response' },
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvarToken(authToken);
        }),
      );
  }
}
