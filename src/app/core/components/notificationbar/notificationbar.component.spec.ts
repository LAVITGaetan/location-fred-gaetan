import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationbarComponent } from './notificationbar.component';

describe('NotificationbarComponent', () => {
  let component: NotificationbarComponent;
  let fixture: ComponentFixture<NotificationbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationbarComponent]
    });
    fixture = TestBed.createComponent(NotificationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
