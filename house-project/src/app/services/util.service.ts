import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

public capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
constructor() { }

}
