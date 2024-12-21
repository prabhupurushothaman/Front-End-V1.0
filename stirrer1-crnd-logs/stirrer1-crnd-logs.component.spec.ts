import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stirrer1CrndLogsComponent } from './stirrer1-crnd-logs.component';

describe('Stirrer1CrndLogsComponent', () => {
  let component: Stirrer1CrndLogsComponent;
  let fixture: ComponentFixture<Stirrer1CrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stirrer1CrndLogsComponent]
    });
    fixture = TestBed.createComponent(Stirrer1CrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
