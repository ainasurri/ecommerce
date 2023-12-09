import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }