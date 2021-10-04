import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemAlbunsComponent } from './listagem-albuns/listagem-albuns.component';
import { FormularioAlbunsComponent } from './formulario-albuns/formulario-albuns.component';
import { DetalhesAlbunsComponent } from './detalhes-albuns/detalhes-albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { GeneralModule } from '../general/general.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListagemAlbunsComponent, FormularioAlbunsComponent, DetalhesAlbunsComponent],
  imports: [
    GeneralModule,
    CommonModule,
    AlbunsRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
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
export class AlbunsModule { }
