import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../meditation.service';
@Component({
  selector: 'app-med-search',
  templateUrl: './med-search.component.html',
  styleUrls: ['./med-search.component.css'],
})
export class MedSearchComponent implements OnInit {
  constructor(private service: MeditationService) {}

  meditationsVideos: any;

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos = () => {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.meditationsVideos = response;
    });
  };
}
