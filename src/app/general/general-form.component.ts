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
import { ToastrService } from "ngx-toastr";
import { switchMap } from "rxjs/operators";
import { GeneralModel } from "./general.model";
import { GeneralService } from "./general.service";

@Directive({
    selector: '[general-form]'
})
export abstract class GeneralForm<T extends GeneralModel>
  implements OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked
{
  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = [];
  submittingForm: boolean = false;
  formControl: AbstractControl;
  key: string;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: GeneralService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
        public toster: ToastrService,

    public ChaveEntidade: string,
    public Entidade: string
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setCurrentAction(); //Informa se insercao ou edicao
    this.buildResourceForm(); //cria o formulario de dados
    this.loadResource(); // le os dados de acordo com o formulario
    this.loadResourcesOptions();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  ngAfterViewInit() {
    this.loadResourcesAfterViewInit();
  }

  ngAfterViewChecked() {}

  submitForm() {

    if (this.currentAction == "novo") {
      this.createResource();
    } else {
      this.updateResource();
    }
  }

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path == "novo") this.currentAction = "novo";
    else this.currentAction = "editar";
  }

  protected setFormArray(form: FormGroup, resource: any) {
    Object.keys(form.controls).forEach((key) => {
      if (form.controls[key] instanceof FormArray) {
        const formArray = form.controls[key] as FormArray;
        for (let index = 0; index < resource[key].length; index++) {
          formArray.push(
            this.cloneAbstractControl(
              formArray.controls[0],
              resource[key][index] as FormGroup
            )
          );
        }
        formArray.controls.shift();
      } else if (form.controls[key] instanceof FormGroup) {
        this.setFormArray(form.controls[key] as FormGroup, resource[key]);
      }
    });
  }

  protected loadResource() {
    if (this.currentAction == "editar") {
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
            console.log(resource)
            this.setFormArray(this.resourceForm, resource);

            this.resourceForm.patchValue(resource);
            this.loadResourcesAfterViewInit();
            this.loadResourcesOptionsAfterForm();
          });
    }
  }

  cloneAbstractControl<T extends AbstractControl>(control: T, value = null): T {
    let newControl: T;

    if (control instanceof FormGroup) {
      const formGroup = new FormGroup(
        {},
        control.validator,
        control.asyncValidator
      );
      const controls = control.controls;

      Object.keys(controls).forEach((key) => {
        formGroup.addControl(
          key,
          this.cloneAbstractControl(controls[key], value[key])
        );
      });

      newControl = formGroup as any;
    } else if (control instanceof FormArray) {
      const formArray = new FormArray(
        [],
        control.validator,
        control.asyncValidator
      );

      control.controls.forEach((formControl) =>
        formArray.push(this.cloneAbstractControl(formControl))
      );

      newControl = formArray as any;
    } else if (control instanceof FormControl) {
      newControl = new FormControl(
        value,
        control.validator,
        control.asyncValidator
      ) as any;
    } else {
      throw new Error("Error: unexpected control value");
    }

    if (control.disabled) newControl.disable({ emitEvent: false });

    return newControl;
  }

  protected setPageTitle() {
    if (this.currentAction == "novo") this.pageTitle = this.creationPageTitle();
    else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return "Novo";
  }

  protected editionPageTitle(): string {
    return "Edição";
  }

  protected setKey(resource: any): T {
    Object.keys(resource).forEach((key) => {
      if (resource[key] !== null) {
        if (resource[key].key) {
          resource[key] = resource[key].value;
        } else if (typeof resource[key] === "object") {
          this.setKey(resource[key]);
        }
      }
    });
    return resource;
  }

  protected createResource() {
    let resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    resource = this.setKey(resource);

    this.resourceService.create(resource).subscribe(
      (resource) => this.actionsForSuccess(resource),
      (error) => this.actionsForError(error)
    );
  }

  protected updateResource() {
    let resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    resource = this.setKey(resource);
    this.resourceService.update(resource, this.key).subscribe(
      (resource) => this.actionsForSuccess(resource),
      (error) => this.actionsForError(error)
    );
  }

  protected actionsForSuccess(resource: T) {
    this.toster.success("Solicitação processada com sucesso!");

    const [module, resources, method] = this.router.url.split("/");

    this.router.navigate([module, resources, "lista"]);
    console.log(resource);
    this.resource = resource;
  }

  protected actionsForError(error) {
    this.toster.error("Ocorreu um erro ao processar a sua solicitação!");

    this.submittingForm = false;

    if (error.status === 422) {
      this.serverErrorMessages = [];
      error.error.fields.forEach((element) => {
        this.serverErrorMessages.push(element.message);
      });
      console.log(this.serverErrorMessages);
    } else {
      this.serverErrorMessages = [
        "Falha na comunicação com o servidor. Por favor, tente mais tarde.",
      ];
    }
  }


  protected loadResourcesOptions(): void {}

  protected loadResourcesOptionsAfterForm(): void {}

  protected loadResourcesAfterViewInit(): void {}

  protected abstract buildResourceForm(): void;
}
