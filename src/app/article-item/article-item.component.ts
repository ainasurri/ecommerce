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
  imageUrl: string = "../../assets/tassa.png";
  isOnSale: boolean = false;
  quantityInCart: number = 0;

  increment() {
    this.quantityInCart++;
  }

  decrement() {
    if (this.quantityInCart > 0) {
      this.quantityInCart--;
    }
  }

}