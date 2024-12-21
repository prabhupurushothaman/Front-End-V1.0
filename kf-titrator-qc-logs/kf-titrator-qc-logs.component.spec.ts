import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfTitratorQcLogsComponent } from './kf-titrator-qc-logs.component';

describe('KfTitratorQcLogsComponent', () => {
  let component: KfTitratorQcLogsComponent;
  let fixture: ComponentFixture<KfTitratorQcLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KfTitratorQcLogsComponent]
    });
    fixture = TestBed.createComponent(KfTitratorQcLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
