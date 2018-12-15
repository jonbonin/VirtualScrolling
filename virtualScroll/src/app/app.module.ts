import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';

import { AppComponent } from './app.component';
import { PicListComponent } from './pic-list/pic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PicListComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    PlatformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
