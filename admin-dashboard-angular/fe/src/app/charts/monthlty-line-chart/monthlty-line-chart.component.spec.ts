import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthltyLineChartComponent } from './monthlty-line-chart.component';

describe('MonthltyLineChartComponent', () => {
  let component: MonthltyLineChartComponent;
  let fixture: ComponentFixture<MonthltyLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthltyLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthltyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
