import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwtDecode from 'jwt-decode';
import { UsuarioInterface } from './usuario.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<UsuarioInterface>({});

  constructor(private tokenService: TokenService) {
    if (tokenService.retornaToken()) {
      this.decodificaJwt();
    }
  }

  private decodificaJwt(): void {
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as UsuarioInterface;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(): Observable<UsuarioInterface> {
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
