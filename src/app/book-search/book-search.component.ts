import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  meditationBooks: any;
  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks = () => {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.meditationBooks = response.items;
    });
  };
}
