import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartFirstComponent } from './highchart-first.component';

describe('HighchartFirstComponent', () => {
  let component: HighchartFirstComponent;
  let fixture: ComponentFixture<HighchartFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
