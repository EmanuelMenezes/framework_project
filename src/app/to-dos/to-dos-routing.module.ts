import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalhesToDosComponent } from "./detalhes-to-dos/detalhes-to-dos.component";
import { FormularioToDosComponent } from "./formulario-to-dos/formulario-to-dos.component";
import { ListagemToDosComponent } from "./listagem-to-dos/listagem-to-dos.component";

const routes: Routes = [
    { path: "",
     redirectTo: "lista" 
    },
    {
        path: "lista",
        component: ListagemToDosComponent
    },
    {
        path: "novo",
        component: FormularioToDosComponent
    },
    {
        path: ":id/editar",
        component: FormularioToDosComponent
    },
    {
        path: ":id/detalhes",
        component: DetalhesToDosComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDosRoutingModule {}
