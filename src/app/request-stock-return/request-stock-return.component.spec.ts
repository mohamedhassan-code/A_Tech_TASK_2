import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStockReturnComponent } from './request-stock-return.component';

describe('RequestStockReturnComponent', () => {
  let component: RequestStockReturnComponent;
  let fixture: ComponentFixture<RequestStockReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestStockReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestStockReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
