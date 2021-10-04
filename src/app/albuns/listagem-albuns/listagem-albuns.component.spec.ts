import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAlbunsComponent } from './listagem-albuns.component';

describe('ListagemAlbunsComponent', () => {
  let component: ListagemAlbunsComponent;
  let fixture: ComponentFixture<ListagemAlbunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAlbunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
