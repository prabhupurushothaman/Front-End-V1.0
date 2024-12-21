import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EutechPh1BpLogsComponent } from './eutech-ph1-bp-logs.component';

describe('EutechPh1BpLogsComponent', () => {
  let component: EutechPh1BpLogsComponent;
  let fixture: ComponentFixture<EutechPh1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EutechPh1BpLogsComponent]
    });
    fixture = TestBed.createComponent(EutechPh1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
