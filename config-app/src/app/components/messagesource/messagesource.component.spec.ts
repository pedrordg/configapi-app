import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesourceComponent } from './messagesource.component';

describe('MessagesourceComponent', () => {
  let component: MessagesourceComponent;
  let fixture: ComponentFixture<MessagesourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
