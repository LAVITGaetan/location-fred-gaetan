import { Component } from '@angular/core';
import { blogs } from 'src/assets/files/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articleCount: number = 4;
  articles = blogs.slice(0, this.articleCount);

}
