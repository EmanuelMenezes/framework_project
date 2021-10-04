import { collectExternalReferences } from '@angular/compiler';
import { Component, Injector, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { map, mapTo, switchMap } from 'rxjs/operators';
import { GeneralListComponent } from 'src/app/general/general-list.component';
import { User } from 'src/app/general/user.model';
import { UserService } from 'src/app/general/user.service';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-listagem-albuns',
  templateUrl: './listagem-albuns.component.html',
  styleUrls: ['./listagem-albuns.component.scss']
})
export class ListagemAlbunsComponent extends GeneralListComponent<Album> {

  displayedColumns: string[] = ['id', 'userId', 'title', 'Acoes'];
  displayedColumnsFilter: any[] = [
    ['User ID', 'title'],
  ];
  key: string = 'id';
  data: any;
  userService: UserService
  constructor(public injector: Injector, public albumService: AlbumService ) { 
    super(injector, albumService);
    this.userService = new UserService(injector);
 }
  private user: User[];

  buscarDados(query = "") {
    this.albumService.getAll(query).subscribe(
      (resources) => {
        console.log("entrou")
        this.resources = resources;
        this.dataSource = this.resources;

        this.dataSource.forEach(element => {
        this.userService.getById(element.userId).subscribe(
          (user) => {
            this.data = user
            this.dataSource[(element.id - 1)].User = this.data;

          } 
        );
      });
      console.log(this.dataSource)
    },
      (error) => console.log("Erro ao carregar a lista"));
  }
}
