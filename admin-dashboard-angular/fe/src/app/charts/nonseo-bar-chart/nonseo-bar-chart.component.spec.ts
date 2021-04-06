import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonseoBarChartComponent } from './nonseo-bar-chart.component';

describe('NonseoBarChartComponent', () => {
  let component: NonseoBarChartComponent;
  let fixture: ComponentFixture<NonseoBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonseoBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonseoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
