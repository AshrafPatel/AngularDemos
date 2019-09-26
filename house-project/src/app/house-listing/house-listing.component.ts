import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousesService } from '../services/houses.service';
import { House } from '../house';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
  houses: Array<House>;
  error: string;

  constructor(private http: HttpClient, private housesService: HousesService) { }

  ngOnInit() {
    this.housesService.getAllHouses()
      .subscribe(
        (data: House[]) => this.houses = data,
        error => this.error = error.statusText
      );
    this.housesService.newHouseSubject.subscribe(
      data => this.houses.push(data)
    );
  }

}
