import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricConversionComponent } from './historic-conversion.component';

describe('HistoricConversionComponent', () => {
  let component: HistoricConversionComponent;
  let fixture: ComponentFixture<HistoricConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
