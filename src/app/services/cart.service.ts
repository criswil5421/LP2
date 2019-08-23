import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getListItems() {
    return this.items;
  }

  removeCart() {
    this.items = [];
    return this.items;
  }

}
