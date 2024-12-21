import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HplcQcqaLogsComponent } from './hplc-qcqa-logs.component';

describe('HplcQcqaLogsComponent', () => {
  let component: HplcQcqaLogsComponent;
  let fixture: ComponentFixture<HplcQcqaLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HplcQcqaLogsComponent]
    });
    fixture = TestBed.createComponent(HplcQcqaLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
