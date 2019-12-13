import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedvalueComponent } from './predefinedvalue.component';

describe('PredefinedvalueComponent', () => {
  let component: PredefinedvalueComponent;
  let fixture: ComponentFixture<PredefinedvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
