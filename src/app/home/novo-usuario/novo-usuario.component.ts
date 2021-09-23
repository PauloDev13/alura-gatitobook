import { Component, OnInit } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
  ) {}

  novoUsuarioForm!: FormGroup;

  // novoUsuario = {} as NovoUsuario;

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  handleCadastrar(): void {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

    this.novoUsuarioService.cadastroNovoUsuario(novoUsuario).subscribe(
      () => {
        console.log(`Usuario ${novoUsuario.userName} salvo com sucesso.`);
      },
      (erro) => {
        alert(`Erro ao salvar usuário: ${novoUsuario.userName}`);
        console.error(erro);
      },
    );
  }
}
