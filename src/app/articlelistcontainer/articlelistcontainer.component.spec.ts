import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlelistcontainerComponent } from './articlelistcontainer.component';

describe('ArticlelistcontainerComponent', () => {
  let component: ArticlelistcontainerComponent;
  let fixture: ComponentFixture<ArticlelistcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlelistcontainerComponent]
    });
    fixture = TestBed.createComponent(ArticlelistcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
