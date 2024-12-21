import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumOvenCrndLogsComponent } from './vacuum-oven-crnd-logs.component';

describe('VacuumOvenCrndLogsComponent', () => {
  let component: VacuumOvenCrndLogsComponent;
  let fixture: ComponentFixture<VacuumOvenCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacuumOvenCrndLogsComponent]
    });
    fixture = TestBed.createComponent(VacuumOvenCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
