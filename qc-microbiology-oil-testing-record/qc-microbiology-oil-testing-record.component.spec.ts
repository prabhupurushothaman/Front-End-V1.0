import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMicrobiologyOilTestingRecordComponent } from './qc-microbiology-oil-testing-record.component';

describe('QcMicrobiologyOilTestingRecordComponent', () => {
  let component: QcMicrobiologyOilTestingRecordComponent;
  let fixture: ComponentFixture<QcMicrobiologyOilTestingRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMicrobiologyOilTestingRecordComponent]
    });
    fixture = TestBed.createComponent(QcMicrobiologyOilTestingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
