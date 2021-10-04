import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalhesAlbunsComponent } from "./detalhes-albuns/detalhes-albuns.component";
import { FormularioAlbunsComponent } from "./formulario-albuns/formulario-albuns.component";
import { ListagemAlbunsComponent } from "./listagem-albuns/listagem-albuns.component";

const routes: Routes = [
    { path: "",
     redirectTo: "lista" 
    },
    {
        path: "lista",
        component: ListagemAlbunsComponent
    },
    {
        path: "novo",
        component: FormularioAlbunsComponent
    },
    {
        path: ":id/editar",
        component: FormularioAlbunsComponent
    },
    {
        path: ":id/detalhes",
        component: DetalhesAlbunsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbunsRoutingModule {}
