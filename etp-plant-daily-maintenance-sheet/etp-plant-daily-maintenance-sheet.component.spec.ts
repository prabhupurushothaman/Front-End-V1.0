import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtpPlantDailyMaintenanceSheetComponent } from './etp-plant-daily-maintenance-sheet.component';

describe('EtpPlantDailyMaintenanceSheetComponent', () => {
  let component: EtpPlantDailyMaintenanceSheetComponent;
  let fixture: ComponentFixture<EtpPlantDailyMaintenanceSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtpPlantDailyMaintenanceSheetComponent]
    });
    fixture = TestBed.createComponent(EtpPlantDailyMaintenanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
