import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fridge1BpLogsComponent } from './fridge1-bp-logs.component';

describe('Fridge1BpLogsComponent', () => {
  let component: Fridge1BpLogsComponent;
  let fixture: ComponentFixture<Fridge1BpLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fridge1BpLogsComponent]
    });
    fixture = TestBed.createComponent(Fridge1BpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
