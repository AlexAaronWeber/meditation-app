import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favoriteMusic: any[] = [];
  favoriteMeditation: any[] = [];
  favoriteBooks: any[] = [];

  constructor() {}

  addToMusicFavorites = (music: any) => {
    if (this.favoriteMusic.indexOf(music) == -1) {
      this.favoriteMusic.push(music);
      console.log(this.favoriteMusic);
    }
  };
  addToMeditationsFavorites = (meditation: any) => {
    if (this.favoriteMeditation.indexOf(meditation) == -1) {
      this.favoriteMeditation.push(meditation);
      console.log(this.favoriteMeditation);
    }
  };
  addToBooksFavorites = (book: any) => {
    if (this.favoriteBooks.indexOf(book) == -1) {
      this.favoriteBooks.push(book);
      console.log(this.favoriteBooks);
    }
  };

  getFavorites = (): any => {
    return this.favoriteMusic;
  };
  getMedFavorites = (): any => {
    return this.favoriteMeditation;
  };
  getBookFavorites = (): any => {
    return this.favoriteBooks;
  };

  deleteFavorite = (index: number) => {
    this.favoriteMusic.splice(index, 1);
  };
  deleteMedFavorite = (index: number) => {
    this.favoriteMeditation.splice(index, 1);
  };
  deleteBookFavorite = (index: number) => {
    this.favoriteBooks.splice(index, 1);
  };
}
