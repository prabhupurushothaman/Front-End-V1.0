import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilBath2CrndLogsComponent } from './oil-bath2-crnd-logs.component';

describe('OilBath2CrndLogsComponent', () => {
  let component: OilBath2CrndLogsComponent;
  let fixture: ComponentFixture<OilBath2CrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OilBath2CrndLogsComponent]
    });
    fixture = TestBed.createComponent(OilBath2CrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
