import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminarAirflowChamper2MrndLogsComponent } from './laminar-airflow-champer2-mrnd-logs.component';

describe('LaminarAirflowChamper2MrndLogsComponent', () => {
  let component: LaminarAirflowChamper2MrndLogsComponent;
  let fixture: ComponentFixture<LaminarAirflowChamper2MrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaminarAirflowChamper2MrndLogsComponent]
    });
    fixture = TestBed.createComponent(LaminarAirflowChamper2MrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
