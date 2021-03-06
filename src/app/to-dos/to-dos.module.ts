import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../general/general.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDosRoutingModule } from './to-dos-routing.module';
import { ListagemToDosComponent } from './listagem-to-dos/listagem-to-dos.component';

@NgModule({
  declarations: [ListagemToDosComponent],
  imports: [
    CommonModule,
    GeneralModule,
    ToDosRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
  ]
})
export class ToDosModule { }
