import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemToDosComponent } from './listagem-to-dos/listagem-to-dos.component';
import { DetalhesToDosComponent } from './detalhes-to-dos/detalhes-to-dos.component';
import { FormularioToDosComponent } from './formulario-to-dos/formulario-to-dos.component';

@NgModule({
  declarations: [ListagemToDosComponent, DetalhesToDosComponent, FormularioToDosComponent],
  imports: [
    CommonModule
  ]
})
export class ToDosModule { }
