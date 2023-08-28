import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeComponent } from './enigme.component';

describe('EnigmeComponent', () => {
  let component: EnigmeComponent;
  let fixture: ComponentFixture<EnigmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnigmeComponent]
    });
    fixture = TestBed.createComponent(EnigmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
