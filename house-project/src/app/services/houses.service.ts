import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { House } from '../house';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  public newHouseSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getAllHouses() {
    return this.http.get<House[]>('data/houses.json')
      .pipe(map(res => res));
  }

  addHouse(data) {
    data.image = 'default-image';
    this.newHouseSubject.next(this.newHouseSubject);
  }

}
