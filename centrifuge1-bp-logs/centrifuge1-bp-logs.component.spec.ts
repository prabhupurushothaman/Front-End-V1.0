import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrifuge1BpLogsComponent } from './centrifuge1-bp-logs.component';

describe('Centrifuge1BpLogsComponent', () => {
  let component: Centrifuge1BpLogsComponent;
  let fixture: ComponentFixture<Centrifuge1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centrifuge1BpLogsComponent]
    });
    fixture = TestBed.createComponent(Centrifuge1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
