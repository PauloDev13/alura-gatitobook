import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  retornaToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string): void {
    return localStorage.setItem(KEY, token);
  }

  excluiToken(): void {
    return localStorage.removeItem(KEY);
  }

  possuiToken(): boolean {
    return !!this.retornaToken();
  }
}
