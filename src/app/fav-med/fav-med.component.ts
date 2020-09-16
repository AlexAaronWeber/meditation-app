import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-fav-med',
  templateUrl: './fav-med.component.html',
  styleUrls: ['./fav-med.component.css'],
})
export class FavMedComponent implements OnInit {
  @Input() meditationsRef: any;
  @Output() deleted = new EventEmitter<void>();

  constructor(private service: FavoritesService) {}

  ngOnInit(): void {}

  deleteMeditation() {
    this.deleted.emit();
  }

  // deleteMeditationFavorite = (fav: any) => {
  //   this.service.deleteMedFavorite(fav);
  // };
  // deleteMeditationFavorite = (index: number) => {
  //   this.meditationsFavs.splice(index, 1);
  // };
}
