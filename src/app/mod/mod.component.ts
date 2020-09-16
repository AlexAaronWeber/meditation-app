import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../meditation.service';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css'],
})
export class ModComponent implements OnInit {
  modVideo: any;
  randomAssVideo: any;
  constructor(private service: MeditationService) {}

  ngOnInit(): void {
    this.getMeditationForToday();
    setTimeout(() => {
      this.randomMod(this.modVideo);
      console.log(this.randomAssVideo);
    }, 1000);
  }

  getMeditationForToday = () => {
    this.modVideo = this.service.getModVideo().items;
    console.log(this.modVideo);
  };

  randomMod = (array) => {
    this.randomAssVideo = array[Math.floor(Math.random() * array.length)];
  };
}
