import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieimageComponent } from './galerieimage.component';

describe('GalerieimageComponent', () => {
  let component: GalerieimageComponent;
  let fixture: ComponentFixture<GalerieimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalerieimageComponent]
    });
    fixture = TestBed.createComponent(GalerieimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
