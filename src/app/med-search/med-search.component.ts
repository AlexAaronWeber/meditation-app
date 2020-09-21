import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MeditationService } from '../meditation.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-med-search',
  templateUrl: './med-search.component.html',
  styleUrls: ['./med-search.component.css'],
})
export class MedSearchComponent implements OnInit {
  @Input() meditationRef: any;
  @Output() showInfo = new EventEmitter<any>();
  meditationsVideos: any;
  meditations: any;
  meditation: any;
  isFavorite: boolean = false;
  constructor(
    private service: MeditationService,
    private sanitizer: DomSanitizer,
    private favsService: FavoritesService
  ) {}

  ngOnInit(): void {
    // this.getVideosDefault('meditation');
  }

  getVideosDefault = (string): any => {
    this.service.getMeditations(string).subscribe((response) => {
      this.meditationsVideos = response.items;
      console.log(response);
    });
  };

  getVideos = (form: NgForm): any => {
    this.service.getMeditations(form.value.meditation).subscribe((response) => {
      this.meditationsVideos = response.items;
      console.log(response);
    });
  };

  sanitize = () => {
    this.meditationsVideos.forEach((item) => {
      // item.url = `https://www.youtube.com/embed/${item.id.videoId}`;
      item.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${item.id.videoId}`
      );
    });
  };

  addToFavorites = (meditation) => {
    // if (this.isFavorite === false) {
    //   this.isFavorite = true;
    this.favsService.addToMeditationsFavorites(meditation);
  };
  // };
}
