import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../autenticacao/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {} as LoginUsuario;

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  handleLogin(): void {
    this.authService.autenticar(this.user).subscribe(
      () => {
        console.log('Autenticado com sucesso');
        this.router.navigate(['animais']).then();
      },
      (error) => {
        alert('Usuário e/ou Senha inválido.');
        console.log(error);
      },
    );
  }
}
