import { Component } from '@angular/core';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  name: string = 'Tassa verda';
  price: number = 3.99;
  imageUrl: string = 'imatge.jpg'; 
  isOnSale: boolean = false;
  quantityInCart: number = 0;
}