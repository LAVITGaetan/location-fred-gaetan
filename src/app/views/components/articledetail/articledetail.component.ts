import { Component } from '@angular/core';
import { blogs } from 'src/assets/files/article';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent {
  article! : Blog | undefined
  id_article = 0
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id_article = params['id'];
      this.id_article = id_article
      this.article = blogs.find(el => el.id == id_article)
    });
  }
}
