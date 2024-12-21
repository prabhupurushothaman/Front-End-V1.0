import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicCleanerCrndLogsComponent } from './ultrasonic-cleaner-crnd-logs.component';

describe('UltrasonicCleanerCrndLogsComponent', () => {
  let component: UltrasonicCleanerCrndLogsComponent;
  let fixture: ComponentFixture<UltrasonicCleanerCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltrasonicCleanerCrndLogsComponent]
    });
    fixture = TestBed.createComponent(UltrasonicCleanerCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
