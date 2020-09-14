import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../meditation.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-med-search',
  templateUrl: './med-search.component.html',
  styleUrls: ['./med-search.component.css'],
})
export class MedSearchComponent implements OnInit {
  meditationsVideos: any;
  meditations: any;
  constructor(
    private service: MeditationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    //this.getVideos();
    this.getPlaceHolderVids();
  }

  // getVideos = () => {
  //   this.service.getData().subscribe((response) => {
  //     console.log(response);
  //     this.meditationsVideos = response.items;
  //   });
  // };

  sanitize = () => {
    this.meditationsVideos.forEach((item) => {
      // item.url = `https://www.youtube.com/embed/${item.id.videoId}`;
      item.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${item.id.videoId}`
      );
    });
  };

  getPlaceHolderVids = () => {
    this.meditationsVideos = this.service.getPlaceHolderVids().items;
    this.sanitize();
    console.log(this.meditationsVideos);
  };
}
