import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { LastBookVisitedService }  from '../providers/last-book-visited-service';
import { SettingsService } from '../providers/settings-service';

import { AppRate } from '@ionic-native/app-rate';
import { DeviceFeedback } from '@ionic-native/device-feedback';
import { HeaderColor } from '@ionic-native/header-color';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Insomnia } from '@ionic-native/insomnia';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Toast } from '@ionic-native/toast';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { BooksPage } from '../pages/books/books';
import { BookPage } from '../pages/book/book';
import { ChaptersPage } from '../pages/chapters/chapters';
import { SearchPage } from '../pages/search/search';
import { InteractionPage } from '../pages/interaction/interaction';
import { InteractionMorePage } from '../pages/interaction-more/interaction-more';
import { BookmarkListsPage } from '../pages/bookmark-lists/bookmark-lists';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { SettingsPage } from '../pages/settings/settings';
import { PopOverPage } from '../pages/popover/popover';

import { HighlightPipe } from '../pipes/highlight-pipe';

import Amplify from 'aws-amplify';
import aws_exports from '../assets/aws-exports';

Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    BooksPage,
    BookPage,
    ChaptersPage,
    SearchPage,
    InteractionPage,
    InteractionMorePage,
    BookmarkListsPage,
    BookmarksPage,
    SettingsPage,
    PopOverPage,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    BooksPage,
    BookPage,
    ChaptersPage,
    SearchPage,
    InteractionPage,
    InteractionMorePage,
    BookmarkListsPage,
    BookmarksPage,
    SettingsPage,
    PopOverPage
  ],
  providers: [
    AppRate,
    DeviceFeedback,
    HeaderColor,
    InAppBrowser,
    Insomnia,
    SocialSharing,
    SplashScreen,
    StatusBar,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LastBookVisitedService,
    SettingsService
  ]
})
export class AppModule {}
