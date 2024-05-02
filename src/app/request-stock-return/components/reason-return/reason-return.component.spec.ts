import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonReturnComponent } from './reason-return.component';

describe('ReasonReturnComponent', () => {
  let component: ReasonReturnComponent;
  let fixture: ComponentFixture<ReasonReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReasonReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
