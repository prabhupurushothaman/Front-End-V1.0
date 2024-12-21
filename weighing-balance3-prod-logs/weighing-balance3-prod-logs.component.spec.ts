import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingBalance3ProdLogsComponent } from './weighing-balance3-prod-logs.component';

describe('WeighingBalance3ProdLogsComponent', () => {
  let component: WeighingBalance3ProdLogsComponent;
  let fixture: ComponentFixture<WeighingBalance3ProdLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingBalance3ProdLogsComponent]
    });
    fixture = TestBed.createComponent(WeighingBalance3ProdLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
