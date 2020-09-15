import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-mus-search',
  templateUrl: './mus-search.component.html',
  styleUrls: ['./mus-search.component.css'],
})
export class MusSearchComponent implements OnInit {
  musicVideos: any;
  music: any;
  constructor(private service: MusicService) {}

  ngOnInit(): void {
    this.getPlaceHolderMusic();
  }

  getPlaceHolderMusic = () => {
    this.musicVideos = this.service.getPlaceHolderMusic().items;
    console.log(this.musicVideos);
  };
}
