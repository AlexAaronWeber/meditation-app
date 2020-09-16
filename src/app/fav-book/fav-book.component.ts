import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-fav-book',
  templateUrl: './fav-book.component.html',
  styleUrls: ['./fav-book.component.css'],
})
export class FavBookComponent implements OnInit {
  @Input() bookRef: any;
  @Output() deleted = new EventEmitter<void>();
  bookFavs: any[] = [];

  constructor(private service: FavoritesService) {}

  ngOnInit(): void {}

  deleteBook() {
    this.deleted.emit();
  }

  // deleteBookFavorite = (fav: any) => {
  //   this.service.deleteBookFavorite(fav);
  // };

  // deleteBookFavorite = (index: number) => {
  //   this.bookFavs.splice(index, 1);
  //};
}
