import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, NewsComponent, BoardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
