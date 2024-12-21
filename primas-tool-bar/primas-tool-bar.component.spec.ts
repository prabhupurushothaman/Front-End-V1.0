import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimasToolBarComponent } from './primas-tool-bar.component';

describe('PrimasToolBarComponent', () => {
  let component: PrimasToolBarComponent;
  let fixture: ComponentFixture<PrimasToolBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimasToolBarComponent]
    });
    fixture = TestBed.createComponent(PrimasToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
