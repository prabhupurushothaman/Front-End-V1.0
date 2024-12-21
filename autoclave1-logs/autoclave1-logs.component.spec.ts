import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autoclave1LogsComponent } from './autoclave1-logs.component';

describe('Autoclave1LogsComponent', () => {
  let component: Autoclave1LogsComponent;
  let fixture: ComponentFixture<Autoclave1LogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Autoclave1LogsComponent]
    });
    fixture = TestBed.createComponent(Autoclave1LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
