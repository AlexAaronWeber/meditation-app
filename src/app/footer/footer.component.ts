import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  homeClicked: Boolean = true;
  bookClicked: Boolean = false;
  musicClicked: Boolean = false;
  medClicked: Boolean = false;
  favClicked: Boolean = false;

  ngOnInit(): void {}

  homeClick = () => {
    this.homeClicked = true;
    this.bookClicked = false;
    this.musicClicked = false;
    this.medClicked = false;
    this.favClicked = false;
  };
}
