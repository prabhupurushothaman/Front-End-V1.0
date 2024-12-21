import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotAirOvenCrndLogsComponent } from './hot-air-oven-crnd-logs.component';

describe('HotAirOvenCrndLogsComponent', () => {
  let component: HotAirOvenCrndLogsComponent;
  let fixture: ComponentFixture<HotAirOvenCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotAirOvenCrndLogsComponent]
    });
    fixture = TestBed.createComponent(HotAirOvenCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
