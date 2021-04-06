import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBarChartComponent } from './seo-bar-chart.component';

describe('SeoBarChartComponent', () => {
  let component: SeoBarChartComponent;
  let fixture: ComponentFixture<SeoBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
