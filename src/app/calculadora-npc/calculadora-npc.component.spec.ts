import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraNpcComponent } from './calculadora-npc.component';

describe('CalculadoraNpcComponent', () => {
  let component: CalculadoraNpcComponent;
  let fixture: ComponentFixture<CalculadoraNpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraNpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
