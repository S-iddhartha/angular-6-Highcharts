import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartSecondComponent } from './highchart-second.component';

describe('HighchartSecondComponent', () => {
  let component: HighchartSecondComponent;
  let fixture: ComponentFixture<HighchartSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
