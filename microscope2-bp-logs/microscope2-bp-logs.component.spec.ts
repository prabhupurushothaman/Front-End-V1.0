import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Microscope2BpLogsComponent } from './microscope2-bp-logs.component';

describe('Microscope2BpLogsComponent', () => {
  let component: Microscope2BpLogsComponent;
  let fixture: ComponentFixture<Microscope2BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Microscope2BpLogsComponent]
    });
    fixture = TestBed.createComponent(Microscope2BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
