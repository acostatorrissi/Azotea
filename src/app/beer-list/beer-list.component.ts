import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      name: 'Marea negra',
      style : 'Porter',
      price : 200,
      stock: 5,
      image : 'assets/img/1.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Hoppy Day',
      style : 'Ipa',
      price : 250,
      stock: 7,
      image : 'assets/img/2.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Clover',
      style : 'Irish red',
      price : 210,
      stock: 0,
      image : 'assets/img/3.jpg',
      clearance: false,
      quantity: 0,
    }
  ];
  
  constructor(private cart: BeerCartService) { 

  }

  ngOnInit(): void {
  }

  addToCart(beer): void{

    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
}
