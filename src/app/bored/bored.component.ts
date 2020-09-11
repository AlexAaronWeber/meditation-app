import { Component, OnInit } from '@angular/core';
import { BoredService } from '../bored.service';
@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css'],
})
export class BoredComponent implements OnInit {
  activity: any;

  constructor(private service: BoredService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities = () => {
    this.service.getActivities().subscribe((response) => {
      this.activity = response;
      console.log(this.activity);
    });
  };
}
