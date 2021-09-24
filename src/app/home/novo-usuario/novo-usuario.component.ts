import { Component, OnInit } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuarioInterface } from './novo-usuario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorMinusculo } from './validator-minusculo';
import { UsuarioExisteService } from './usuario-existe.service';
import { Router } from '@angular/router';

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
    private router: Router,
  ) {}

  novoUsuarioForm!: FormGroup;

  // novoUsuario = {} as NovoUsuarioInterface;

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
    if (this.novoUsuarioForm.valid) {
      const novoUsuario =
        this.novoUsuarioForm.getRawValue() as NovoUsuarioInterface;

      this.novoUsuarioService.cadastroNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']).then();
        },
        (erro) => {
          alert(`Erro ao salvar usuário: ${novoUsuario.userName}`);
          console.error(erro);
        },
      );
    }
  }
}
