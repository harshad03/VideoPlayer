import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideoListingComponent } from './video-listing/video-listing.component';
import { MainPlayerSectionComponent } from './main-player-section/main-player-section.component';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    VideoListingComponent,
    MainPlayerSectionComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
