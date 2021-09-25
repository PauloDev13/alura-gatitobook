import { Component, OnInit } from '@angular/core';
import { Animais } from '../animal.interface';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais: Animais = [];

  constructor(
    private usuarioService: UsuarioService,
    private animalService: AnimalService,
  ) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';

      this.animalService.listaDeUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      });
    });
  }
}
