import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { FormsModule } from '@angular/forms';
import { AzoteaAboutComponent } from './azotea-about/azotea-about.component';
import { AzoteaBikesComponent } from './azotea-bikes/azotea-bikes.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    AzoteaAboutComponent,
    AzoteaBikesComponent,
    InputIntegerComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
