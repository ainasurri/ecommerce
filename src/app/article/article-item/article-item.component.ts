import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class ArticleItemComponent implements OnInit {
  @Output() increment = new EventEmitter<string>(); 
  @Output() decrement = new EventEmitter<string>();
  @Input() article!: Article;
  
  constructor() { 
 
    };
  

  ngOnInit() {
  
  }

  // increment() {
  //   quantityInCart++;
  //   quantityChange.emit({article: this.article, quantity: this.article.quantityInCart});
  // }

  // decrement() {
  //   if (this.article.quantityInCart > 0) {
  //     this.article.quantityInCart--;
  //     this.quantityChange.emit({article: this.article, quantity: this.article.quantityInCart});
  //   }
  // }
}
