import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor() { }

  ngOnInit(): void { }

  handleIncrement(articleId: string) {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.quantityInCart++;
    }
  }

  handleDecrement(articleId: string) {
    const article = this.articles.find(a => a.id === articleId);
    if (article && article.quantityInCart > 0) {
      article.quantityInCart--;
    }
  }
}
