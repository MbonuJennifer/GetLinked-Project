import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacySectionComponent } from './privacy-section.component';

describe('PrivacySectionComponent', () => {
  let component: PrivacySectionComponent;
  let fixture: ComponentFixture<PrivacySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacySectionComponent]
    });
    fixture = TestBed.createComponent(PrivacySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
