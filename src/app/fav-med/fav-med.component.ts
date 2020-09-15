import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-fav-med',
  templateUrl: './fav-med.component.html',
  styleUrls: ['./fav-med.component.css'],
})
export class FavMedComponent implements OnInit {
  @Input() meditationRef: any;

  constructor(private service: FavoritesService) {}

  ngOnInit(): void {}
}
