import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioToDosComponent } from './formulario-to-dos.component';

describe('FormularioToDosComponent', () => {
  let component: FormularioToDosComponent;
  let fixture: ComponentFixture<FormularioToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
