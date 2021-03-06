import { Component, OnInit, ViewChild } from '@angular/core';
import { HousesService } from '../services/houses.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newHouseForm') newHouseForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'House', 'Duplex'];
  constructor(public housesService: HousesService) { }

  ngOnInit() {
  }

  onFormSubmit(data): void {
    this.housesService.addHouse(data);
    this.newHouseForm.reset();
  }

}
