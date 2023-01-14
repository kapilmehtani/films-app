import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FilmListComponent } from './film-list/film-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilmInfoComponent } from './film-list/film-info/film-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilmListComponent,
    FilmInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
