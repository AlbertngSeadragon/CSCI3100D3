import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatinputformComponent } from './datinputform.component';

describe('DatinputformComponent', () => {
  let component: DatinputformComponent;
  let fixture: ComponentFixture<DatinputformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatinputformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatinputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
