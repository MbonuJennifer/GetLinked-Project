import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaSectionComponent } from './criteria-section.component';

describe('CriteriaSectionComponent', () => {
  let component: CriteriaSectionComponent;
  let fixture: ComponentFixture<CriteriaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriteriaSectionComponent]
    });
    fixture = TestBed.createComponent(CriteriaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
