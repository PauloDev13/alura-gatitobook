import { Component, OnInit } from '@angular/core';
import { Animais } from '../animal.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  // Muda ao utilizar resolver
  // animais$: Observable<Animais> = of([]);
  animais: Animais = [];

  constructor(
    private activatedRoute: ActivatedRoute, // Muda ao utilizar resolver // private usuarioService: UsuarioService,
  ) // private animalService: AnimalService,
  {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.animais = this.activatedRoute.snapshot.data.animais;
    });
    // Muda ao utilizar resolver
    // this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //   switchMap((usuario) => {
    //     const userName = usuario.name ?? '';
    //     return this.animalService.listaDeUsuario(userName);
    //   }),
    // );

    // this.usuarioService.retornaUsuario().subscribe((usuario) => {
    //   const userName = usuario.name ?? '';
    //
    //   this.animalService.listaDeUsuario(userName).subscribe((animais) => {
    //     this.animais = animais;
    //   });
    // });
  }
}
