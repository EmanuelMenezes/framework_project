import {
  OnInit,
  AfterContentChecked,
  Injector,
  Directive,
  AfterViewChecked,
  AfterViewInit,
} from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { GeneralModel } from "./general.model";
import { GeneralService } from "./general.service";

@Directive({
    selector: '[general-detail]'
})
export abstract class GeneralDetail<T extends GeneralModel>
  implements OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked
{
  resourceForm: FormGroup;
  formControl: AbstractControl;
  key: string;

  protected route: ActivatedRoute;
  protected router: Router;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: GeneralService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
    public ChaveEntidade: string,
    public Entidade: string
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
    this.loadResource(); // le os dados de acordo com o formulario
    this.loadResourcesOptions();
  }

  ngAfterContentChecked() {
  }

  ngAfterViewInit() {
    this.loadResourcesAfterViewInit();
  }

  ngAfterViewChecked() {}

  protected loadResource() {
      this.route.paramMap
        .pipe(
          switchMap((params) =>
            this.resourceService.getById(
              +params.get("id")
            )
          )
        )
        .subscribe(
          (resource) => {
            this.resource = resource;
            this.resourceForm.patchValue(resource);
            this.loadResourcesAfterViewInit();
          });
    
  }

  protected loadResourcesOptions(): void {}

  protected loadResourcesAfterViewInit(): void {}

}
