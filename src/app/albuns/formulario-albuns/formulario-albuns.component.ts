import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { GeneralForm } from 'src/app/general/general-form.component';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-formulario-albuns',
  templateUrl: './formulario-albuns.component.html',
  styleUrls: ['./formulario-albuns.component.scss']
})

export class FormularioAlbunsComponent extends GeneralForm<Album> {
  photos : any
  user: any

  constructor(
    protected albumService: AlbumService,
    protected injector: Injector,
    public toaster: ToastrService
  ) {
    super(
      injector,
      new Album(),
      albumService,
      Album.fromJson,
      toaster,
      "id",
      "Album"
    );
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      userId: [null],
      title: [null, [Validators.required]],
      photos: [null]

    });
  }

  protected deletePhoto(photo){
    this.photos.shift(photo);
    console.log(this.photos);
  }
  protected updateResource() {
    this.resourceForm.value.photos = this.photos
    console.log(this.resourceForm);
    let resource: Album = this.jsonDataToResourceFn(this.resourceForm.value);
    resource = this.setKey(resource);
    this.resourceService.update(resource, this.key).subscribe(
      (resource) => this.actionsForSuccess(resource),
      (error) => this.actionsForError(error)
    );
  }
  protected creationPageTitle(): string {
    return "Criando novo álbum";
  }
  protected loadResource() {
      this.route.paramMap
        .pipe(
          switchMap((params) => 
            this.albumService.getById(+params.get("id")
            )
          )
        )
        .subscribe(
          (resource) => {
            this.resource = resource;

        });
    this.route.paramMap.pipe(switchMap(
      (params) => this.albumService.getPhotosbyAlbum(+params.get("id"))
    )).subscribe((resource) => {
      this.photos = resource;
      this.resourceForm.patchValue(this.resource);
      this.loadResourcesAfterViewInit();

    })
  }
  gerarImagem(){
    let hex_code = (Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').slice(0,6).replace(".", "6");
    let imagem = {
      "albumId": this.resourceForm.value.id,
      "title": "newImageHex"+hex_code,
      "url": "https://via.placeholder.com/600/"+hex_code,
      "thumbnailUrl": "https://via.placeholder.com/150/"+hex_code
    }
    this.photos.unshift(imagem);
  } 
  
  protected editionPageTitle(): string {
    const nomeAlbum = this.resource.title || "";
    this.key = "id";
    return "Editando álbum: " + nomeAlbum;
  }
}