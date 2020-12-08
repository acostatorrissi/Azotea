import { Component, OnInit } from '@angular/core';
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(beer:Beer):void{
    if(beer.quantity < beer.stock){
      beer.quantity++;
    } 
  }

  downQuantity(beer:Beer):void{
    if(beer.quantity > 0){
      beer.quantity--;
    }  
  }

  onChangeQuantity(event, beer:Beer):void{
    if(event.target.value > beer.stock){
      event.target.value = beer.stock;
      alert("Stock máximo alcanzado");
    }
  }

}
