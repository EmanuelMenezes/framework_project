import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListagemToDosComponent } from "./listagem-to-dos/listagem-to-dos.component";

const routes: Routes = [
    { path: "",
     redirectTo: "lista" 
    },
    {
        path: "lista",
        component: ListagemToDosComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDosRoutingModule {}
