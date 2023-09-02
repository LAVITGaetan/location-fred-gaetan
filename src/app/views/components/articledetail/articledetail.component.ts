import { Component } from '@angular/core';
import { articles } from 'src/assets/files/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent {
  articles = articles
  id_article = 0
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id_article = params['id'];
      console.log('Valeur du paramètre:', id_article);
      this.id_article = id_article
    });
  }
}
