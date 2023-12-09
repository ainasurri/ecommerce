import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})

export class ArticleItemComponent implements OnInit {
  public article: Article;

  constructor() { 
    this.article = {
      name: '',
      imageUrl: '',
      price: 0,
      isOnSale: false,
      quantityInCart: 0
    };
  }

  ngOnInit() {
    this.article = {
      name: 'Tassa',
      imageUrl: 'https://files.oaiusercontent.com/file-vcFMUzT5iv9i4ThM3VlBmsAn?se=2023-12-09T17%3A03%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D19ff97cd-4a89-4fb6-9c06-eef2571560a2.webp&sig=afHA8icohVYyv/j0/q7S8RI5anBA4nsL/nCpB8820LE%3D0',
      price: 5,
      isOnSale: true,
      quantityInCart: 0
    };
  }

  increment() {
    this.article.quantityInCart++;
  }

  decrement() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
