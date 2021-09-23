import { Component, OnInit } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  novoUsuario = {} as NovoUsuario;

  ngOnInit(): void {}

  handleCadastro(): void {
    this.novoUsuarioService.cadastroNovoUsuario(this.novoUsuario).subscribe(
      () => {
        console.log(`Usuario ${this.novoUsuario.userName} salvo com sucesso.`);
      },
      (erro) => {
        alert('Erro ao salvar novo usuário');
        console.error(erro);
      },
    );
  }
}
