import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shaker1BpLogsComponent } from './shaker1-bp-logs.component';

describe('Shaker1BpLogsComponent', () => {
  let component: Shaker1BpLogsComponent;
  let fixture: ComponentFixture<Shaker1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shaker1BpLogsComponent]
    });
    fixture = TestBed.createComponent(Shaker1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
