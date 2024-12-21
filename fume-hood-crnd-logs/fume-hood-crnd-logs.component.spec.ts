import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumeHoodCrndLogsComponent } from './fume-hood-crnd-logs.component';

describe('FumeHoodCrndLogsComponent', () => {
  let component: FumeHoodCrndLogsComponent;
  let fixture: ComponentFixture<FumeHoodCrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FumeHoodCrndLogsComponent]
    });
    fixture = TestBed.createComponent(FumeHoodCrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
