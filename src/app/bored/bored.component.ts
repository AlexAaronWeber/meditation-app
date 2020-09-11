import { Component, OnInit } from '@angular/core';
import { BoredService } from '../bored.service';
@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css'],
})
export class BoredComponent implements OnInit {
  constructor(private service: BoredService) {}

  ngOnInit(): void {}
}
