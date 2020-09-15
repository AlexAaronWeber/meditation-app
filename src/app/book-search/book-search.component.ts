import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  meditationBooks: any;

  constructor(private service: BooksService, private router: Router) {}

  ngOnInit(): void {}

  getBooks = (form: NgForm): any => {
    this.service.getData(form.value.books).subscribe((response) => {
      this.meditationBooks = response.items;
      console.log(response.items);
    });
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
