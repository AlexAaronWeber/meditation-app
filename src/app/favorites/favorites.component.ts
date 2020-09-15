import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  showIndex: number;
  favorites: any[];
  constructor(private service: FavoritesService) {}

  ngOnInit(): void {}

  showDetails = (index: number) => {
    this.showIndex = index;
    console.log(this.showIndex);
  };
}
