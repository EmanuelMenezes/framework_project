import { OnInit, Directive, Input, Injector } from "@angular/core";

import Swal from "sweetalert2";
import { GeneralModel } from "./general.model";
import { GeneralService } from "./general.service";

@Directive({
    selector: '[general-list]'
})
export abstract class GeneralListComponent<T extends GeneralModel> implements OnInit{
  displayedColumns: string[] = [];
  displayedColumnsFilter: any[] = [
    ["Título", "Album.title"],
    ["User ID", "Album.userId"],
  ];

  dataSource: T[] =[];

  key: string;

  filtro: string;
  @Input() filtroExpressao: string = "";

  resources: any;

  constructor(
    protected injector: Injector,
    protected resourceService: GeneralService<T>
  ) {}

  ngOnInit() {
    this.filtro = this.displayedColumnsFilter[0];
    this.buscarDados();
  }
  
  setFiltro(filtro) {
    this.filtro = filtro;
    this.applyFilter();
  }

  applyFilter(event: any = null) {
    if (this.filtroExpressao.length >= 1 && this.filtroExpressao) {
      const query = `?${this.filtro[1]}_like=${this.filtroExpressao}`;
      this.buscarDados(query);
    } else if (this.filtroExpressao.length == 0) {
      this.buscarDados();
    }
  }
  buscarDados(query = "") {
    this.resourceService.getAll(query).subscribe(
      (resources) => {
        this.resources = resources;
        this.dataSource = this.resources;
      },
      (error) => console.log("Erro ao carregar a lista")
    );
  }

  delete(resource: T, query: number) {
    Swal.fire({
      title: "Tem certeza?",
      text: "O registro será excluído permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, apague!",
      cancelButtonText: "Não, engano",
    }).then((result) => {
      if (result.value) {
        this.resourceService.delete(query).subscribe(
          (result) => {
            this.resources = this.resources.filter(element => element != resource);
            this.dataSource = this.resources;
            Swal.fire("Deletado!", "Registro deletado com sucesso!", "success");
          },
          (error) => {
            Swal.fire("Cancelado", "Operação foi cancelada!", "error");
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Operação foi cancelada!", "error");
      }
    });
  }
}
