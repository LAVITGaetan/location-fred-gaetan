import { Component, Input } from '@angular/core';
import { articles } from 'src/assets/files/article';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-articlelistcontainer',
  templateUrl: './articlelistcontainer.component.html',
  styleUrls: ['./articlelistcontainer.component.css']
})
export class ArticlelistcontainerComponent {
  @Input() article_depart: number = 0; // nombre de départ
  @Input() article_arrivee: number = 10; // nombre d'arrivé
  constructor(private seo: SeoService) { }
  articles = articles
  
  ngOnInit(): void {
    this.seo.setTitle('article-activites-bivouac-ile-de-la-reunion-974');
    this.seo.setDescription(
      'Activités , surf, plage, bivouac, exploration, biodiversité'
    );
  }
  changeArticleParam() {
    // Afficher moins de articles
    if (this.article_arrivee == 6) {
      this.article_arrivee = 3
      document.getElementsByClassName('article-show-more')[0].innerHTML = '+'
    } 
    // Afficher plus de articles
    else {
      this.article_arrivee = 6;
      document.getElementsByClassName('article-show-more')[0].innerHTML = '-'
    }
  }
}
