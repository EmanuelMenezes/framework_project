import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
    {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
    },
    {
    path: "inicio",
    component: StartPageComponent
    },
    {
    path: "albuns",
    loadChildren: () =>
      import("./albuns/albuns.module").then((m) => m.AlbunsModule),
    },
      {
    path: "postagens",
    loadChildren: () =>
      import("./postagens/postagens.module").then((m) => m.PostagensModule),
    },
      {
    path: "to-dos",
    loadChildren: () =>
      import("./to-dos/to-dos.module").then((m) => m.ToDosModule),
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
