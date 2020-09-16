import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-book-bar',
  templateUrl: './book-bar.component.html',
  styleUrls: ['./book-bar.component.css'],
})
export class BookBarComponent implements OnInit {
  meditationBooks: any;
  constructor(
    private service: BooksService,
    private favsService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.getBooks('meditation guides');
  }

  getBooks = (subject: string): any => {
    this.service.getData(subject).subscribe((response) => {
      this.meditationBooks = response.items;
      console.log(response.items);
    });
  };

  addToFavorites = (book) => {
    this.favsService.addToBooksFavorites(book);
  };
}
