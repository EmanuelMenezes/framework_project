import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemToDosComponent } from './listagem-to-dos.component';

describe('ListagemToDosComponent', () => {
  let component: ListagemToDosComponent;
  let fixture: ComponentFixture<ListagemToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
