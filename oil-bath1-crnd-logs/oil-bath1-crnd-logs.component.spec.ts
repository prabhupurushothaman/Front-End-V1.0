import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilBath1CrndLogsComponent } from './oil-bath1-crnd-logs.component';

describe('OilBath1CrndLogsComponent', () => {
  let component: OilBath1CrndLogsComponent;
  let fixture: ComponentFixture<OilBath1CrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OilBath1CrndLogsComponent]
    });
    fixture = TestBed.createComponent(OilBath1CrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
