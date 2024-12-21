import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMicrobiologyEnvironmentalTestingRecordComponent } from './qc-microbiology-environmental-testing-record.component';

describe('QcMicrobiologyEnvironmentalTestingRecordComponent', () => {
  let component: QcMicrobiologyEnvironmentalTestingRecordComponent;
  let fixture: ComponentFixture<QcMicrobiologyEnvironmentalTestingRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMicrobiologyEnvironmentalTestingRecordComponent]
    });
    fixture = TestBed.createComponent(QcMicrobiologyEnvironmentalTestingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
