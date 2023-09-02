import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledetailComponent } from './articledetail.component';

describe('ArticledetailComponent', () => {
  let component: ArticledetailComponent;
  let fixture: ComponentFixture<ArticledetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticledetailComponent]
    });
    fixture = TestBed.createComponent(ArticledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
