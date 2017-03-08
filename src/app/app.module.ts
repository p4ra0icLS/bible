import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { BooksPage } from '../pages/books/books';
import { BookPage } from '../pages/book/book';
import { ChaptersPage } from '../pages/chapters/chapters';
import { InteractionPage } from '../pages/interaction/interaction';
import { InteractionMorePage } from '../pages/interaction-more/interaction-more';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { PopOverPage } from '../pages/popover/popover';

// Directives
import { Focuser } from '../components/focuser/focuser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksPage,
    BookPage,
    ChaptersPage,
    InteractionPage,
    InteractionMorePage,
    BookmarksPage,
    PopOverPage,
    Focuser
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooksPage,
    BookPage,
    ChaptersPage,
    InteractionPage,
    InteractionMorePage,
    BookmarksPage,
    PopOverPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
