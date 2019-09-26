/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HousesService } from './houses.service';

describe('Service: Houses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousesService]
    });
  });

  it('should ...', inject([HousesService], (service: HousesService) => {
    expect(service).toBeTruthy();
  }));
});
