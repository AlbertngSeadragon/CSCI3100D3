import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryDoughnutChartComponent } from './catergory-doughnut-chart.component';

describe('CatergoryDoughnutChartComponent', () => {
  let component: CatergoryDoughnutChartComponent;
  let fixture: ComponentFixture<CatergoryDoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatergoryDoughnutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatergoryDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
