import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HousesService } from '../services/houses.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  propertyTypes: Array<string> = ['Condo', 'House', 'Duplex'];
  constructor(public housesService: HousesService) { }

  ngOnInit() {
  }

  onFormSubmit(data): void  {
    this.housesService.addHouse(data);
  }

}
