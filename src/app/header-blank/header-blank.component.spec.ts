import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlankComponent } from './header-blank.component';

describe('HeaderBlankComponent', () => {
  let component: HeaderBlankComponent;
  let fixture: ComponentFixture<HeaderBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
