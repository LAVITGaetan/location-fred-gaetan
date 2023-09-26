import { Component, Input } from '@angular/core';
import { blogs } from 'src/assets/files/article';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-articlelistcontainer',
  templateUrl: './articlelistcontainer.component.html',
  styleUrls: ['./articlelistcontainer.component.css']
})
export class ArticlelistcontainerComponent {
  constructor(private seo: SeoService) { }
  articles = blogs
  
  ngOnInit(): void {
    this.seo.setTitle('article-activites-bivouac-ile-de-la-reunion-974');
    this.seo.setDescription(
      'Activités , surf, plage, bivouac, exploration, biodiversité'
    );
  }

}
