import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeCartService } from '../bike-cart.service';
import { Bike } from '../bike-list/Bike';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  cartList$: Observable<Bike[]>;
  
  constructor(@Inject(BikeCartService) private cart: BikeCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
