import { Component, OnInit } from '@angular/core';
import { BoredService } from '../bored.service';
@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css'],
})
export class BoredComponent implements OnInit {
  activity: any;
  affirmation: string;
  affirmations = [
    'You are safe.',
    'Anxiety cannot harm you.',
    'You are brave.',
    "Everything you've ever wanted is beyond fear.",
    'Push through the fear!',
    "Don't let anxiety steal your life.",
    'You will make it through this difficult moment.',
    "Give yourself credit for the things you've done.",
    "Become friends with your anxiety and it can't hurt you anymore.",
    'Give yourself a break!',
    'Take a deep breath.',
  ];

  constructor(private service: BoredService) {}

  ngOnInit(): void {
    this.getActivities();
    this.randomAffirmation(this.affirmations);
    console.log(this.affirmation);
  }

  getActivities = () => {
    this.service.getActivities().subscribe((response) => {
      this.activity = response;
      console.log(this.activity);
    });
  };

  randomAffirmation = (array) => {
    this.affirmation = array[Math.floor(Math.random() * array.length)];
  };
}
