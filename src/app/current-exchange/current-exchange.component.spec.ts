import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentExchangeComponent } from './current-exchange.component';

describe('CurrentExchangeComponent', () => {
  let component: CurrentExchangeComponent;
  let fixture: ComponentFixture<CurrentExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
