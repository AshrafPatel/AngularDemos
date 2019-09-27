import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousesService } from '../services/houses.service';
import { House } from '../house';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
  houses: Array<any>;
  error: string;
  sortField = 'price';
  sortDirection = 'asc';
  sortFields: Array<string> = [
    'address',
    'price',
    'area',
    'bathroom',
    'bedrooms',
    'type'
  ];

  constructor(private http: HttpClient, private housesService: HousesService, public utilService: UtilService) { }

  ngOnInit() {
    this.housesService.getAllHouses()
      .subscribe(
        (data: House[]) => this.houses = data,
        error => this.error = error.statusText
      );
    this.housesService.newHouseSubject.subscribe(
      data => this.houses = [data, ...this.houses]
    );
  }

}
