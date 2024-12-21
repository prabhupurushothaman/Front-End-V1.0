import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtpBatchWorkSheetComponent } from './etp-batch-work-sheet.component';

describe('EtpBatchWorkSheetComponent', () => {
  let component: EtpBatchWorkSheetComponent;
  let fixture: ComponentFixture<EtpBatchWorkSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtpBatchWorkSheetComponent]
    });
    fixture = TestBed.createComponent(EtpBatchWorkSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
