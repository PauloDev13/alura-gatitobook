import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwtDecode from 'jwt-decode';
import { Usuario } from './usuario.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (tokenService.retornaToken()) {
      this.decodificaJwt();
    }
  }

  private decodificaJwt(): void {
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(): Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string): void {
    this.tokenService.salvaToken(token);
    this.decodificaJwt();
  }

  logout(): void {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}
