import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteSegments } from './route-segments.enum';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './forms/address/address.component';


export const routes: Routes = [{
  path: RouteSegments.default,
  pathMatch: 'full',
  redirectTo: RouteSegments.home
}, {
  path: RouteSegments.home,
  component: HomeComponent
}, {
  path: RouteSegments.address,
  component: AddressComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
