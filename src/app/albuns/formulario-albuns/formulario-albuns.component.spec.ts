import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlbunsComponent } from './formulario-albuns.component';

describe('FormularioAlbunsComponent', () => {
  let component: FormularioAlbunsComponent;
  let fixture: ComponentFixture<FormularioAlbunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAlbunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
