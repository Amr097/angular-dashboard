import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { BoardComponent } from './board/board.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,

    MenuComponent,
    NewsComponent,
    BoardComponent,
    ContactsListComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
