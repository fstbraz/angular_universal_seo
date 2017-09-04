import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'universal-load-seo'}),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
