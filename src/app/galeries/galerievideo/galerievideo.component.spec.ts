import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerievideoComponent } from './galerievideo.component';

describe('GalerievideoComponent', () => {
  let component: GalerievideoComponent;
  let fixture: ComponentFixture<GalerievideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalerievideoComponent]
    });
    fixture = TestBed.createComponent(GalerievideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});