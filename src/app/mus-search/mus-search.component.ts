import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MusicService } from '../music.service';
import { NgForm } from '@angular/forms';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-mus-search',
  templateUrl: './mus-search.component.html',
  styleUrls: ['./mus-search.component.css'],
})
export class MusSearchComponent implements OnInit {
  @Input() musicRef: any;
  @Output() showInfo = new EventEmitter<any>();
  musicVideos: any;
  music: any;
  favorites: any = [];

  constructor(
    private service: MusicService,
    private musicService: FavoritesService
  ) {}

  ngOnInit(): void {
    //this.getPlaceHolderMusic();
  }

  getMusicVideos = (form: NgForm): any => {
    this.service.getMusic(form.value.music).subscribe((response) => {
      this.musicVideos = response.items;
      console.log(response);
    });
  };

  addToFavorites = (music) => {
    this.musicService.addToFavorites(music);
  };

  getPlaceHolderMusic = () => {
    this.musicVideos = this.service.getPlaceHolderMusic().items;
    console.log(this.musicVideos);
  };
}
