import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortexCrndLogsComponent } from './vortex-crnd-logs.component';

describe('VortexCrndLogsComponent', () => {
  let component: VortexCrndLogsComponent;
  let fixture: ComponentFixture<VortexCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VortexCrndLogsComponent]
    });
    fixture = TestBed.createComponent(VortexCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
