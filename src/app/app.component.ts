import { Component, ViewEncapsulation } from '@angular/core';

import { RouteSegments } from './route-segments.enum';

@Component({
  selector: 'ng-testing-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  RouteSegments = RouteSegments;
}
