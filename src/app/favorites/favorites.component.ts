import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  showIndex: number;
  musicFavs: any[] = [];
  meditationFavs: any[] = [];
  bookFavs: any[] = [];
  constructor(private service: FavoritesService) {}

  ngOnInit(): void {
    this.getMusicFavorites(),
      this.getMeditationFavorites(),
      this.getBooksFavorites();
  }

  getMusicFavorites = () => {
    this.musicFavs = this.service.getFavorites();
    console.log('this is the favs', this.musicFavs);
  };
  getMeditationFavorites = () => {
    this.meditationFavs = this.service.getMedFavorites();
    console.log('this is the meditation favs', this.meditationFavs);
  };
  getBooksFavorites = () => {
    this.bookFavs = this.service.getBookFavorites();
    console.log('this is the books favs', this.bookFavs);
  };

  //Delete functions
  // deleteMusicFavorite = (index: number) => {
  //   this.musicFavs.splice(index, 1);
  // };

  // deleteMusicFavorite = (fav: any) => {
  //   this.musicFavs.deleteFavorite(fav);
  // };
  deleteBookFavorite = (index: number) => {
    this.bookFavs.splice(index, 1);
  };

  deleteMeditationFavorite = (index: number) => {
    this.meditationFavs.splice(index, 1);
  };

  deleteMusicFavorite = (index: number) => {
    this.musicFavs.splice(index, 1);
  };
}
