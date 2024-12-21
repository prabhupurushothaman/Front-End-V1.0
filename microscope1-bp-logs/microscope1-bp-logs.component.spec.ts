import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Microscope1BpLogsComponent } from './microscope1-bp-logs.component';

describe('Microscope1BpLogsComponent', () => {
  let component: Microscope1BpLogsComponent;
  let fixture: ComponentFixture<Microscope1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Microscope1BpLogsComponent]
    });
    fixture = TestBed.createComponent(Microscope1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
