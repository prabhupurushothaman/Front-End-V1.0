import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminarAirflowChamper1BpLogsComponent } from './laminar-airflow-champer1-bp-logs.component';

describe('LaminarAirflowChamper1BpLogsComponent', () => {
  let component: LaminarAirflowChamper1BpLogsComponent;
  let fixture: ComponentFixture<LaminarAirflowChamper1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaminarAirflowChamper1BpLogsComponent]
    });
    fixture = TestBed.createComponent(LaminarAirflowChamper1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
