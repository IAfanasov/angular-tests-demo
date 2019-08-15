import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './forms/address/address.component';
import { SimulateEventsComponent } from './simulate-events/simulate-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    SimulateEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
