import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shaker2BpLogsComponent } from './shaker2-bp-logs.component';

describe('Shaker2BpLogsComponent', () => {
  let component: Shaker2BpLogsComponent;
  let fixture: ComponentFixture<Shaker2BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shaker2BpLogsComponent]
    });
    fixture = TestBed.createComponent(Shaker2BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
