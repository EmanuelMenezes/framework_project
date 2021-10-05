
import { Component, Injector} from '@angular/core';
import { GeneralListComponent } from 'src/app/general/general-list.component';
import { UserService } from 'src/app/general/user.service';
import { Postagem } from '../postagem.model';
import { PostagemService } from '../postagem.service';

@Component({
  selector: 'app-listagem-postagens',
  templateUrl: './listagem-postagens.component.html',
  styleUrls: ['./listagem-postagens.component.scss']
})
export class ListagemPostagensComponent extends GeneralListComponent<Postagem> {

  displayedColumns: string[] = ['id', 'userId', 'title', 'Acoes'];
  displayedColumnsFilter: any[] = [
    ['User ID', 'title'],
  ];
  key: string = 'id';
  data: any[] = [];
  check: any;

  constructor(public injector: Injector, public userService: UserService , public postagemService: PostagemService ) { 
    super(injector, postagemService);
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
    this.postagemService.getAll(query).subscribe(
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
