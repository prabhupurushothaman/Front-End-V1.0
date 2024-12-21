import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingBalance4ProdLogsComponent } from './weighing-balance4-prod-logs.component';

describe('WeighingBalance4ProdLogsComponent', () => {
  let component: WeighingBalance4ProdLogsComponent;
  let fixture: ComponentFixture<WeighingBalance4ProdLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingBalance4ProdLogsComponent]
    });
    fixture = TestBed.createComponent(WeighingBalance4ProdLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
