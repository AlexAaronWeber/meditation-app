import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-fav-book',
  templateUrl: './fav-book.component.html',
  styleUrls: ['./fav-book.component.css'],
})
export class FavBookComponent implements OnInit {
  @Input() bookRef: any;

  bookFavs: any[] = [];

  constructor(private service: FavoritesService) {}

  ngOnInit(): void {}
}
