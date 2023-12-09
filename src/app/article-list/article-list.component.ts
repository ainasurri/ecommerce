import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article'; // Ajusta aquesta ruta segons on estigui el teu model Article

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [
    { name: 'Tassa 1', imageUrl: 'https://files.oaiusercontent.com/file-aFhVh9g9t1WY86jb18gWO6aV?se=2023-12-09T19%3A00%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ded52e9ba-eb9b-4640-bcad-31ef3fe4a6a8.webp&sig=6nMhvtpcEjs5pIx5bcdJxNf9lBht8LIEF%2BQvXVYm9cw%3D', price: 10, isOnSale: true, quantityInCart: 0 },
    { name: 'Tassa 2', imageUrl: 'https://files.oaiusercontent.com/file-VMAHtYUNEs3lkaKc5pkAOVaZ?se=2023-12-09T19%3A12%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd66f6f64-3963-4064-bc24-eb1368264a52.webp&sig=1Mhbdt8RZCN8a%2BS7RRNUjOjtLO0G55FaPD0oPPnbU28%3D', price: 20, isOnSale: true, quantityInCart: 0 },
    { name: 'Tassa 3', imageUrl: 'https://files.oaiusercontent.com/file-vxiIkkOVIU17n4qJQeSkOvUM?se=2023-12-09T19%3A12%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7beeec3d-43dc-46e6-b23d-48d58459f3d3.webp&sig=8XVjWTYq5aXFE0aYr9xRu6ChkD2/yti/QoMIj8%2BYYF4%3D', price: 15, isOnSale: false, quantityInCart: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
