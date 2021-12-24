import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agegropupa2Component } from './agegropupa2.component';

describe('Agegropupa2Component', () => {
  let component: Agegropupa2Component;
  let fixture: ComponentFixture<Agegropupa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agegropupa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Agegropupa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
