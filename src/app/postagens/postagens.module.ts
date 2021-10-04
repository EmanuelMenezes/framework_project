import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPostagensComponent } from './listagem-postagens/listagem-postagens.component';
import { FormularioPostagensComponent } from './formulario-postagens/formulario-postagens.component';
import { DetalhesPostagensComponent } from './detalhes-postagens/detalhes-postagens.component';
import { GeneralModule } from '../general/general.module';
import { PostagensRoutingModule } from './postagens-routing.module';

@NgModule({
  declarations: [ListagemPostagensComponent, FormularioPostagensComponent, DetalhesPostagensComponent],
  imports: [
    CommonModule,
    GeneralModule,
    PostagensRoutingModule
  ]
})
export class PostagensModule { }
