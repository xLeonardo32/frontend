import {Component, OnInit} from '@angular/core';
import {CarDataService} from "../car-data/car-data.component";
import {NgForOf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent implements OnInit {

  carData: any[] = [];

  constructor(private carDataService: CarDataService) { }

  ngOnInit(): void {
    this.carDataService.getCarData().subscribe(data => {
      this.carData = data.Results;
    });
  }
}
