import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-fav-mus',
  templateUrl: './fav-mus.component.html',
  styleUrls: ['./fav-mus.component.css'],
})
export class FavMusComponent implements OnInit {
  @Input() musicRef: any;

  musicFavs: any[] = [];

  constructor(private service: FavoritesService) {}

  ngOnInit(): void {
    //this.getMusicFavorites();
  }

  // getMusicFavorites = () => {
  //   this.musicFavs = this.service.getFavorites();
  //   console.log('this is the favs', this.musicFavs);
  // };

  deleteMusicFavorite = (fav: any) => {
    this.service.deleteFavorite(fav);
  };
}
