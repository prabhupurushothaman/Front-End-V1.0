import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EutechPh2MrndLogsComponent } from './eutech-ph2-mrnd-logs.component';

describe('EutechPh2MrndLogsComponent', () => {
  let component: EutechPh2MrndLogsComponent;
  let fixture: ComponentFixture<EutechPh2MrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EutechPh2MrndLogsComponent]
    });
    fixture = TestBed.createComponent(EutechPh2MrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
