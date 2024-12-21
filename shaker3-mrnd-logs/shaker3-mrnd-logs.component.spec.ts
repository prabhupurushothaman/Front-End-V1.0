import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shaker3MrndLogsComponent } from './shaker3-mrnd-logs.component';

describe('Shaker3MrndLogsComponent', () => {
  let component: Shaker3MrndLogsComponent;
  let fixture: ComponentFixture<Shaker3MrndLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shaker3MrndLogsComponent]
    });
    fixture = TestBed.createComponent(Shaker3MrndLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
