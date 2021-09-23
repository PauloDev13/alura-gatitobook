import { Component, OnInit } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorMinusculo } from './validator-minusculo';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
  ) {}

  novoUsuarioForm!: FormGroup;

  // novoUsuario = {} as NovoUsuario;

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(6)]],
      userName: [
        '',
        [Validators.required, ValidatorMinusculo],
        [this.usuarioExisteService.usuarioJaExiste()],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
