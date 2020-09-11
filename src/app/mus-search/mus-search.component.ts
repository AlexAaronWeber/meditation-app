import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-mus-search',
  templateUrl: './mus-search.component.html',
  styleUrls: ['./mus-search.component.css'],
})
export class MusSearchComponent implements OnInit {
  constructor(private service: MusicService) {}

  ngOnInit(): void {}

  getMeditations = () => {};
}
