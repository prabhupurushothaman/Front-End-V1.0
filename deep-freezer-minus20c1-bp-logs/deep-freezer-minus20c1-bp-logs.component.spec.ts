import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepFreezerMinus20c1BpLogsComponent } from './deep-freezer-minus20c1-bp-logs.component';

describe('DeepFreezerMinus20c1BpLogsComponent', () => {
  let component: DeepFreezerMinus20c1BpLogsComponent;
  let fixture: ComponentFixture<DeepFreezerMinus20c1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepFreezerMinus20c1BpLogsComponent]
    });
    fixture = TestBed.createComponent(DeepFreezerMinus20c1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
