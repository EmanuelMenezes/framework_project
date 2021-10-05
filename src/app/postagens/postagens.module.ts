import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPostagensComponent } from './listagem-postagens/listagem-postagens.component';
import { FormularioPostagensComponent } from './formulario-postagens/formulario-postagens.component';
import { GeneralModule } from '../general/general.module';
import { PostagensRoutingModule } from './postagens-routing.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListagemPostagensComponent, FormularioPostagensComponent],
  imports: [
    CommonModule,
    GeneralModule,
    PostagensRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
  ]
})
export class PostagensModule { }
