import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favoriteMusic: any = [];
  favoriteMeditation: any = [];
  favoriteBooks: any = [];

  constructor() {}

  addToFavorites = (music: any) => {
    this.favoriteMusic.push(music);
    console.log(this.favoriteMusic);
  };

  getFavorites = () => {
    return this.favoriteMusic;
  };

  deleteFavorite = (index: number) => {
    this.favoriteMusic.splice(index, 1);
  };
}
