import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWaterAnalysisTdsComponent } from './daily-water-analysis-tds.component';

describe('DailyWaterAnalysisTdsComponent', () => {
  let component: DailyWaterAnalysisTdsComponent;
  let fixture: ComponentFixture<DailyWaterAnalysisTdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyWaterAnalysisTdsComponent]
    });
    fixture = TestBed.createComponent(DailyWaterAnalysisTdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
