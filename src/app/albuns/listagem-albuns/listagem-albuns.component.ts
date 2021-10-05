import { collectExternalReferences } from '@angular/compiler';
import { Component, Injector, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { element } from 'protractor';
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
    ['Título', 'title'],
    ['ID', 'id'],
    ['User ID', 'userId'],
  ];
  key: string = 'id';
  data: any[] = [];
  check: any;
  constructor(public injector: Injector, public userService: UserService , public albumService: AlbumService ) { 
    super(injector, albumService);
    this.userService = new UserService(injector);
 }

  checkSameValue(id){
    if(this.check && (this.check == id)){
      return false
    }
    else{
      this.check = id;
      return true
    }
  }

  buscarDados(query = "") {
    this.albumService.getAll(query).subscribe(
      (resources) => {
        this.resources = resources;
        this.dataSource = this.resources;

        this.dataSource.forEach(element => {
        this.userService.getById(element.userId).subscribe(
          (user) => {
            this.data.push(user);
          } 
        );
      });
    },
      (error) => console.log("Erro ao carregar a lista"));
  }
}
