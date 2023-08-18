import { HttpClient } from '@angular/common/http';
import { Product } from '../../../assets/files/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  // getShippingPrices() {
  //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  // }

  addToPanier(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearPanier() {
    this.items = [];
    return this.items;
  }
/* . . . */
}