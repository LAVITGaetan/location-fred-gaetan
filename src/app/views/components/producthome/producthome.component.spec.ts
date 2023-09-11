import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthomeComponent } from './producthome.component';

describe('ProducthomeComponent', () => {
  let component: ProducthomeComponent;
  let fixture: ComponentFixture<ProducthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducthomeComponent]
    });
    fixture = TestBed.createComponent(ProducthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
