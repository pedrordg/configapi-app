import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationkeyDetailComponent } from './configurationkey-detail.component';

describe('ConfigurationkeyDetailComponent', () => {
  let component: ConfigurationkeyDetailComponent;
  let fixture: ComponentFixture<ConfigurationkeyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationkeyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationkeyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
