import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ENV_PROVIDERS } from './environment';
import { AppComponent } from './app.component';
import {PageNotFound} from "./Command/PageNotFound";
import {NavigationBarComponent} from "./NavtigationBar/NavigationBarComponent";
import {AppRouter} from "./app.module-router";
import {ItemMenuModule} from "./ItemMenu/ItemMenuModule";

//导入公共样式
import '../styles/styles.scss';
import '../styles/headings.css';
import {RouterModule} from "@angular/router";
import {MessageComponent, MessageServer} from "./Command/MessageComponent";

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,PageNotFound,
    NavigationBarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ItemMenuModule,

    AppRouter,
  ],
  providers: [
    ENV_PROVIDERS,MessageServer
  ]
})
export class AppModule {}
