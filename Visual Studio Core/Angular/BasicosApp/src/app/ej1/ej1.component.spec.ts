import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJ1Component } from './ej1.component';

describe('EJ1Component', () => {
  let component: EJ1Component;
  let fixture: ComponentFixture<EJ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EJ1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EJ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
