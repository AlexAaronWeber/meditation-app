import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../meditation.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

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
    //this.getPlaceHolderVids();
  }

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

  getPlaceHolderVids = () => {
    this.meditationsVideos = this.service.getPlaceHolderVids().items;
    this.sanitize();
    console.log(this.meditationsVideos);
  };
}
