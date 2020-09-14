import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../meditation.service';
@Component({
  selector: 'app-med-search',
  templateUrl: './med-search.component.html',
  styleUrls: ['./med-search.component.css'],
})
export class MedSearchComponent implements OnInit {
  meditationsVideos: any;
  meditations: any;
  constructor(private service: MeditationService) {}

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

  getPlaceHolderVids = () => {
    this.meditationsVideos = this.service.getPlaceHolderVids().items;
    console.log(this.meditationsVideos);
  };
}
