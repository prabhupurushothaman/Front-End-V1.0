import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stirrer2CrndLogsComponent } from './stirrer2-crnd-logs.component';

describe('Stirrer2CrndLogsComponent', () => {
  let component: Stirrer2CrndLogsComponent;
  let fixture: ComponentFixture<Stirrer2CrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stirrer2CrndLogsComponent]
    });
    fixture = TestBed.createComponent(Stirrer2CrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
