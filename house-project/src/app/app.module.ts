import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HouseListingComponent } from './house-listing/house-listing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { HousesService } from './services/houses.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { UtilService } from './services/util.service';
import { SortByPipe } from '../pipes/sort-by.pipe';

@NgModule({
   declarations: [
      AppComponent,
      HouseListingComponent,
      NavbarComponent,
      HouseCardComponent,
      AddListingFormComponent,
      SortByPipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      HousesService,
      UtilService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
