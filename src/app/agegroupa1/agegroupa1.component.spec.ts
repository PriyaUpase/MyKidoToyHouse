import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agegroupa1Component } from './agegroupa1.component';

describe('Agegroupa1Component', () => {
  let component: Agegroupa1Component;
  let fixture: ComponentFixture<Agegroupa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agegroupa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Agegroupa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
