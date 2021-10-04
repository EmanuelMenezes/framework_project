import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPostagensComponent } from './detalhes-postagens.component';

describe('DetalhesPostagensComponent', () => {
  let component: DetalhesPostagensComponent;
  let fixture: ComponentFixture<DetalhesPostagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPostagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
