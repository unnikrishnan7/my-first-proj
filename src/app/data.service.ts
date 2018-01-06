import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
  
  cars = [
    'alto', 'zen', 'celerio', 'bmw', 'benz'
    
  ];
  
  myData() {
    return 'This is service data!!';
  }

}
