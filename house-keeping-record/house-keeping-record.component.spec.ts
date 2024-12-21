import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseKeepingRecordComponent } from './house-keeping-record.component';

describe('HouseKeepingRecordComponent', () => {
  let component: HouseKeepingRecordComponent;
  let fixture: ComponentFixture<HouseKeepingRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseKeepingRecordComponent]
    });
    fixture = TestBed.createComponent(HouseKeepingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
