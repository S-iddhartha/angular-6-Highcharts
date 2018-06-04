import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDestopComponent } from './header-destop.component';

describe('HeaderDestopComponent', () => {
  let component: HeaderDestopComponent;
  let fixture: ComponentFixture<HeaderDestopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDestopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
