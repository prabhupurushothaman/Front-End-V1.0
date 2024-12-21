import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incubator1MrndLogsComponent } from './incubator1-mrnd-logs.component';

describe('Incubator1MrndLogsComponent', () => {
  let component: Incubator1MrndLogsComponent;
  let fixture: ComponentFixture<Incubator1MrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Incubator1MrndLogsComponent]
    });
    fixture = TestBed.createComponent(Incubator1MrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
