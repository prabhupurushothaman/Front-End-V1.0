import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMicrobiologyWaterTestingRecordComponent } from './qc-microbiology-water-testing-record.component';

describe('QcMicrobiologyWaterTestingRecordComponent', () => {
  let component: QcMicrobiologyWaterTestingRecordComponent;
  let fixture: ComponentFixture<QcMicrobiologyWaterTestingRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMicrobiologyWaterTestingRecordComponent]
    });
    fixture = TestBed.createComponent(QcMicrobiologyWaterTestingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
