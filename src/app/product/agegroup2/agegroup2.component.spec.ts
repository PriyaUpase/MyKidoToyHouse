import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agegroup2Component } from './agegroup2.component';

describe('Agegroup2Component', () => {
  let component: Agegroup2Component;
  let fixture: ComponentFixture<Agegroup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agegroup2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Agegroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
