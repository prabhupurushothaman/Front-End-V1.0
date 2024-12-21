import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMicrobiologyLafTestingRecordComponent } from './qc-microbiology-laf-testing-record.component';

describe('QcMicrobiologyLafTestingRecordComponent', () => {
  let component: QcMicrobiologyLafTestingRecordComponent;
  let fixture: ComponentFixture<QcMicrobiologyLafTestingRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMicrobiologyLafTestingRecordComponent]
    });
    fixture = TestBed.createComponent(QcMicrobiologyLafTestingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
