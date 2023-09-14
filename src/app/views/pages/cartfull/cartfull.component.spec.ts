import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartfullComponent } from './cartfull.component';

describe('CartfullComponent', () => {
  let component: CartfullComponent;
  let fixture: ComponentFixture<CartfullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartfullComponent]
    });
    fixture = TestBed.createComponent(CartfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
