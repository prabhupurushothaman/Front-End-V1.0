import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingBalance1BpLogsComponent } from './weighing-balance1-bp-logs.component';

describe('WeighingBalance1BpLogsComponent', () => {
  let component: WeighingBalance1BpLogsComponent;
  let fixture: ComponentFixture<WeighingBalance1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingBalance1BpLogsComponent]
    });
    fixture = TestBed.createComponent(WeighingBalance1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
