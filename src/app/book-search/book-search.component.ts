import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  @Input() bookRef: any;
  meditationBooks: any;
  book: any;

  constructor(
    private service: BooksService,
    private router: Router,
    private favsService: FavoritesService
  ) {}

  ngOnInit(): void {}

  getBooks = (form: NgForm): any => {
    this.service.getData(form.value.books).subscribe((response) => {
      this.meditationBooks = response.items;
      console.log(response.items);
    });
  };

  addToFavorites = (book) => {
    this.favsService.addToBooksFavorites(book);
  };

  searchBooks = (form: NgForm): any => {
    console.log(form.value.books);
    this.router.navigate(['book'], {
      queryParams: {
        q: form.value.books,
      },
    });
  };
}
