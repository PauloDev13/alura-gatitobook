import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Animais, Animal } from './animal.interface';
import { environment } from '../../environments/environment';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.baseUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(
    private httpClient: HttpClient, // private tokenService: TokenService,
  ) {}

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

  excluirAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.httpClient
      .post(
        `${API}/photos/${id}/like`,
        {},
        {
          observe: 'response',
        },
      )
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        }),
      );
  }

  upload(
    descricao: string,
    permiteComentario: boolean,
    arquivo: File,
  ): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.httpClient.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
