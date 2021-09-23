import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUser {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpCliente: HttpClient) {}

  autenticar({ userName, password }: IUser): Observable<IUser> {
    return this.httpCliente.post<IUser>('http://localhost:3000/user/login', {
      userName,
      password,
    });
  }
}
