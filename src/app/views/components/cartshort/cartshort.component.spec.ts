import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartshortComponent } from './cartshort.component';

describe('CartshortComponent', () => {
  let component: CartshortComponent;
  let fixture: ComponentFixture<CartshortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartshortComponent]
    });
    fixture = TestBed.createComponent(CartshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
