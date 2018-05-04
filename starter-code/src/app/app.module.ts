import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { MovieInfoService } from './movie-info.service';


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MovieInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

