import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-fav-mus',
  templateUrl: './fav-mus.component.html',
  styleUrls: ['./fav-mus.component.css'],
})
export class FavMusComponent implements OnInit {
  @Input() musicRef: any;

  constructor(private service: FavoritesService) {}

  ngOnInit(): void {}
}
