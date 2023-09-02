import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvComponent } from './cgv.component';

describe('CgvComponent', () => {
  let component: CgvComponent;
  let fixture: ComponentFixture<CgvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgvComponent]
    });
    fixture = TestBed.createComponent(CgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
