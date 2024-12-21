import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingBalance2CrndLogsComponent } from './weighing-balance2-crnd-logs.component';

describe('WeighingBalance2CrndLogsComponent', () => {
  let component: WeighingBalance2CrndLogsComponent;
  let fixture: ComponentFixture<WeighingBalance2CrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingBalance2CrndLogsComponent]
    });
    fixture = TestBed.createComponent(WeighingBalance2CrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
