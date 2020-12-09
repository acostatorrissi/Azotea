import { Component, OnInit } from '@angular/core';
import { BikeCartService } from '../bike-cart.service';
import { BikeDataService } from '../bike-data.service';
import { Bike } from './Bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {

  bikes: Bike[] = [];
  
  constructor(private cart: BikeCartService, private bikesDataService: BikeDataService){

  }

  ngOnInit(): void {
    this.bikesDataService.getAll()
      .subscribe(bikes => this.bikes = bikes);
  }

  addToCart(bike): void{

    this.cart.addToCart(bike);
    bike.stock -= bike.quantity;
    bike.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
}
