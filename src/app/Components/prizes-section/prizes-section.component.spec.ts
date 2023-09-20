import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesSectionComponent } from './prizes-section.component';

describe('PrizesSectionComponent', () => {
  let component: PrizesSectionComponent;
  let fixture: ComponentFixture<PrizesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizesSectionComponent]
    });
    fixture = TestBed.createComponent(PrizesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
