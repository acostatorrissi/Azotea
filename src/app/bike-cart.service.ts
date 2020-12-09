import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bike } from './bike-list/Bike';

@Injectable({
  providedIn: 'root'
})
export class BikeCartService {

  // Variable observada
  private _cartList: Bike[] = [];

  cartList: BehaviorSubject<Bike[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(bike: Bike) {
    let item: Bike = this._cartList.find((v1) => v1.name == bike.name);
    if(!item){
      this._cartList.push({...bike});
    }else{
      item.quantity += bike.quantity;
    }
    this.cartList.next(this._cartList);
  }
}
