import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AnimalService } from '../animal.service';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { Animais } from '../animal.interface';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private animalService: AnimalService,
    private usuarioService: UsuarioService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Animais> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animalService.listaDeUsuario(userName);
      }),
      take(1),
    );
  }
}
