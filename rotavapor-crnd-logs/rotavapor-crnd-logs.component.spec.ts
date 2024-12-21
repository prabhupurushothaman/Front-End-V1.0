import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotavaporCrndLogsComponent } from './rotavapor-crnd-logs.component';

describe('RotavaporCrndLogsComponent', () => {
  let component: RotavaporCrndLogsComponent;
  let fixture: ComponentFixture<RotavaporCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotavaporCrndLogsComponent]
    });
    fixture = TestBed.createComponent(RotavaporCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
