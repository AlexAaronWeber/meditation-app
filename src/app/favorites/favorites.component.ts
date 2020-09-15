import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  showIndex: number;
  favorites: any[] = [];
  musicFavs: any[] = [];
  constructor(private service: FavoritesService) {}

  ngOnInit(): void {
    this.getMusicFavorites();
  }

  getMusicFavorites = () => {
    this.musicFavs = this.service.getFavorites();
    console.log('this is the favs', this.musicFavs);
  };
}
