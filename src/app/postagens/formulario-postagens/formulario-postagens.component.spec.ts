import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPostagensComponent } from './formulario-postagens.component';

describe('FormularioPostagensComponent', () => {
  let component: FormularioPostagensComponent;
  let fixture: ComponentFixture<FormularioPostagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPostagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
