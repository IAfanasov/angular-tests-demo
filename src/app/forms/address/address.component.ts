import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { countries, cities } from '../../data';
import { City, Country } from '../../model';


@Component({
  selector: 'ng-testing-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

  searchCountry = (text$: Observable<string>) =>
    text$.pipe(
      map(term => term.length < 2 ? []
        : countries
          .filter(c => new RegExp(term, 'gi').test(c.name))
          .slice(0, 10))
    )

  searchCity = (text$: Observable<string>) =>
    text$.pipe(
      map(term => term.length < 2 ? []
        : cities
          .filter(c => new RegExp(term, 'gi').test(c.name))
          .slice(0, 10))
    )

  getName = (item: City | Country) => item.name;

  constructor() { }

  ngOnInit() {

  }
}
