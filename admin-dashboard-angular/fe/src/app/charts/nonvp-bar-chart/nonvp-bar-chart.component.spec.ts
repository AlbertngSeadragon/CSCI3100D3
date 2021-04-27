import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvpBarChartComponent } from './nonvp-bar-chart.component';

describe('NonvpBarChartComponent', () => {
  let component: NonvpBarChartComponent;
  let fixture: ComponentFixture<NonvpBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvpBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvpBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
