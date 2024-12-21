import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingMantleCrndLogsComponent } from './heating-mantle-crnd-logs.component';

describe('HeatingMantleCrndLogsComponent', () => {
  let component: HeatingMantleCrndLogsComponent;
  let fixture: ComponentFixture<HeatingMantleCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatingMantleCrndLogsComponent]
    });
    fixture = TestBed.createComponent(HeatingMantleCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
