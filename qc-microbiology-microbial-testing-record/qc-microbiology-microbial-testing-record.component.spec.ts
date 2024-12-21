import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMicrobiologyMicrobialTestingRecordComponent } from './qc-microbiology-microbial-testing-record.component';

describe('QcMicrobiologyMicrobialTestingRecordComponent', () => {
  let component: QcMicrobiologyMicrobialTestingRecordComponent;
  let fixture: ComponentFixture<QcMicrobiologyMicrobialTestingRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMicrobiologyMicrobialTestingRecordComponent]
    });
    fixture = TestBed.createComponent(QcMicrobiologyMicrobialTestingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
