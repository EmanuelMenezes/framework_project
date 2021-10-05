import { Component, Injector, OnInit } from '@angular/core';
import { GeneralListComponent } from 'src/app/general/general-list.component';
import { UserService } from 'src/app/general/user.service';
import { ToDo } from '../to-do.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-listagem-to-dos',
  templateUrl: './listagem-to-dos.component.html',
  styleUrls: ['./listagem-to-dos.component.scss']
})
export class ListagemToDosComponent extends GeneralListComponent<ToDo> {

  displayedColumns: string[] = ['id', 'userId', 'title', 'Acoes'];
  displayedColumnsFilter: any[] = [
    ['User ID', 'title'],
  ];
  key: string = 'id';
  data: any[] = [];
  checkSet: string[] = [""];
  check: any;

  constructor(public injector: Injector, public userService: UserService , public toDoService: ToDoService ) { 
    super(injector, toDoService);
    this.userService = new UserService(injector);
 }
   checkAlreadySet(name){
    if(this.checkSet.indexOf(name) > 20){
      this.checkSet.push(name);
      return true
    }
    else{
      this.checkSet.push(name);
      return false
    }
  }

  checkSameValue(id){
    if(this.check && (this.check == id)){
      return true
    }
    else{
      this.check = id;
      return false
    }
  }

  buscarDados(query = "") {
    this.toDoService.getAll(query).subscribe(
      (resources) => {
        this.resources = resources;
        this.dataSource = this.resources;

        this.dataSource.forEach(element => {
        this.userService.getById(element.userId).subscribe(
          (user) => {
              if(this.checkSet.indexOf(user.name) === -1){
                this.checkSet.push(user.name);
               this.data.push(user);

              }
          } 
        );
      });
    },
      (error) => console.log("Erro ao carregar a lista"));
  }
}


