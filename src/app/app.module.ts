import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { DeepLinkConfig, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubPage } from "../pages/sub/sub";
import {HomePageModule} from "../pages/home/home.module";
import {SubPageModule} from "../pages/sub/sub.module";
const myLink : DeepLinkConfig= {
  links: [
    { component: HomePage, name: 'home' },
    { component: SubPage, name: 'sub' },
  ]
};
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    SubPageModule,
    IonicModule.forRoot(MyApp, {}, myLink)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
