import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipNonvipChartComponent } from './vip-nonvip-chart.component';

describe('VipNonvipChartComponent', () => {
  let component: VipNonvipChartComponent;
  let fixture: ComponentFixture<VipNonvipChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipNonvipChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipNonvipChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
