import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MensagemModule],
})
export class HomeModule {}
