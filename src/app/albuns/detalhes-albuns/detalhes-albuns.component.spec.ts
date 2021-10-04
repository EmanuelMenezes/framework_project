import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAlbunsComponent } from './detalhes-albuns.component';

describe('DetalhesAlbunsComponent', () => {
  let component: DetalhesAlbunsComponent;
  let fixture: ComponentFixture<DetalhesAlbunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesAlbunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
