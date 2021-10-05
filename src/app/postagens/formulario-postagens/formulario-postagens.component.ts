import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { GeneralForm } from 'src/app/general/general-form.component';
import { Postagem } from '../postagem.model';
import { PostagemService } from '../postagem.service';

@Component({
  selector: 'app-formulario-postagens',
  templateUrl: './formulario-postagens.component.html',
  styleUrls: ['./formulario-postagens.component.scss']
})

export class FormularioPostagensComponent extends GeneralForm<Postagem> {
  photos : any
  user: any

  constructor(
    protected postagemService: PostagemService,
    protected injector: Injector,
    public toaster: ToastrService
  ) {
    super(
      injector,
      new Postagem(),
      postagemService,
      Postagem.fromJson,
      toaster,
      "id",
      "Postagem"
    );
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      userId: [null],
      title: [null, [Validators.required]],
      body: [null, [Validators.required]]

    });
  }

  protected creationPageTitle(): string {
    return "Criando novo post";
  }
  
  protected editionPageTitle(): string {
    const nomePost = this.resource.title || "";
    this.key = "id";
    return "Editando post: " + nomePost;
  }
}