import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { GeneralForm } from 'src/app/general/general-form.component';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-formulario-albuns',
  templateUrl: './formulario-albuns.component.html',
  styleUrls: ['./formulario-albuns.component.scss']
})
export class FormularioAlbunsComponent extends GeneralForm<Album> {
  constructor(
    protected albumService: AlbumService,
    protected injector: Injector,
  ) {
    super(
      injector,
      new Album(),
      albumService,
      Album.fromJson,
      "id",
      "Album"
    );
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      userId: [null],
      title: [null, [Validators.required]],
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de novo Cargo";
  }

  protected editionPageTitle(): string {
    const nomeAlbum = this.resource.title || "";
    this.key = "id";
    return "Editando Cargo: " + nomeAlbum;
  }
}