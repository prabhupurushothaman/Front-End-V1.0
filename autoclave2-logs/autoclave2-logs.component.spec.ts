import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autoclave2LogsComponent } from './autoclave2-logs.component';

describe('Autoclave2LogsComponent', () => {
  let component: Autoclave2LogsComponent;
  let fixture: ComponentFixture<Autoclave2LogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Autoclave2LogsComponent]
    });
    fixture = TestBed.createComponent(Autoclave2LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
