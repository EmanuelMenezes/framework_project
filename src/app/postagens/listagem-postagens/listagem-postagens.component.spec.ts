import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPostagensComponent } from './listagem-postagens.component';

describe('ListagemPostagensComponent', () => {
  let component: ListagemPostagensComponent;
  let fixture: ComponentFixture<ListagemPostagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPostagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
