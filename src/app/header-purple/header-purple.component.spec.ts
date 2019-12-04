import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPurpleComponent } from './header-purple.component';

describe('HeaderPurpleComponent', () => {
  let component: HeaderPurpleComponent;
  let fixture: ComponentFixture<HeaderPurpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPurpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
