import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { NgForm } from '@angular/forms';
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
    //this.getPlaceHolderMusic();
  }

  getMusicVideos = (form: NgForm): any => {
    this.service.getMusic(form.value.music).subscribe((response) => {
      this.musicVideos = response.items;
      console.log(response);
    });
  };

  getPlaceHolderMusic = () => {
    this.musicVideos = this.service.getPlaceHolderMusic().items;
    console.log(this.musicVideos);
  };
}
