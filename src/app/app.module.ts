import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BookBarComponent } from './book-bar/book-bar.component';
import { ModComponent } from './mod/mod.component';
import { BoredComponent } from './bored/bored.component';
import { MedSearchComponent } from './med-search/med-search.component';
import { MusSearchComponent } from './mus-search/mus-search.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavBookComponent } from './fav-book/fav-book.component';
import { FavMusComponent } from './fav-mus/fav-mus.component';
import { FavMedComponent } from './fav-med/fav-med.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, BookBarComponent, ModComponent, BoredComponent, MedSearchComponent, MusSearchComponent, BookSearchComponent, FavoritesComponent, FavBookComponent, FavMusComponent, FavMedComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
