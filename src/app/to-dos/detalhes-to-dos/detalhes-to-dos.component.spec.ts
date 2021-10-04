import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesToDosComponent } from './detalhes-to-dos.component';

describe('DetalhesToDosComponent', () => {
  let component: DetalhesToDosComponent;
  let fixture: ComponentFixture<DetalhesToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
