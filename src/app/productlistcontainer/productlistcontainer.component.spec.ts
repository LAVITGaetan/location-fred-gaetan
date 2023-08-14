import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistcontainerComponent } from './productlistcontainer.component';

describe('ProductlistcontainerComponent', () => {
  let component: ProductlistcontainerComponent;
  let fixture: ComponentFixture<ProductlistcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductlistcontainerComponent]
    });
    fixture = TestBed.createComponent(ProductlistcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
