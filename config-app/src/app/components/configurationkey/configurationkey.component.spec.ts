import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationKeyComponent } from './configurationkey.component';

describe('ConfigurationKeysComponent', () => {
  let component: ConfigurationKeyComponent;
  let fixture: ComponentFixture<ConfigurationKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
