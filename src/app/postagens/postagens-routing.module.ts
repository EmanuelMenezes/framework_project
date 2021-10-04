import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalhesPostagensComponent } from "./detalhes-postagens/detalhes-postagens.component";
import { FormularioPostagensComponent } from "./formulario-postagens/formulario-postagens.component";
import { ListagemPostagensComponent } from "./listagem-postagens/listagem-postagens.component";

const routes: Routes = [
    { path: "",
     redirectTo: "lista" 
    },
    {
        path: "lista",
        component: ListagemPostagensComponent
    },
    {
        path: "novo",
        component: FormularioPostagensComponent
    },
    {
        path: ":id/editar",
        component: FormularioPostagensComponent
    },
    {
        path: ":id/detalhes",
        component: DetalhesPostagensComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostagensRoutingModule {}
