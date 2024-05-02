import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAndPriceComponent } from './return-and-price.component';

describe('ReturnAndPriceComponent', () => {
  let component: ReturnAndPriceComponent;
  let fixture: ComponentFixture<ReturnAndPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnAndPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
