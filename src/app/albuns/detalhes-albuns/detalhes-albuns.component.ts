import { Component, Injector, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { GeneralDetail } from 'src/app/general/general-detail.component';
import { PhotoService } from 'src/app/general/photo.service';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-detalhes-albuns',
  templateUrl: './detalhes-albuns.component.html',
  styleUrls: ['./detalhes-albuns.component.scss']
})
export class DetalhesAlbunsComponent extends GeneralDetail<Album>{

  photos : any
  constructor(    
    protected albumService: AlbumService,
    protected injector: Injector,) { 
    super( 
      injector,
      new Album(),
      albumService,
      Album.fromJson,
      "id",
      "Album"
    );
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
            this.resourceForm.patchValue(resource);

        });
    this.route.paramMap.pipe(switchMap(
      (params) => this.albumService.getPhotosbyAlbum(+params.get("id"))
    )).subscribe((resource) => {
      this.photos = resource;
      this.loadResourcesAfterViewInit();

    })
  }

}
