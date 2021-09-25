import { Component } from '@angular/core';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService) {}

  logout(): void {
    this.usuarioService.logout();
    // this.router.navigate(['']).then();
  }
}
