import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agegroup1Component } from './agegroup1.component';

describe('Agegroup1Component', () => {
  let component: Agegroup1Component;
  let fixture: ComponentFixture<Agegroup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agegroup1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Agegroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
