import { Injectable } from '@angular/core';
import { Orders } from 'src/assets/files/order';
import { relais } from 'src/assets/files/relai';

export const ordered_products: Orders[] = [

];

export interface Panier {
  id: number,
  id_user: number,
  date_start: string,
  date_end: string,
  id_relai: number,
  products: Orders[],
  code_promo: string,
  quantity: number,
}

const panier: Panier = {
  id: 1,
  id_user: 1,
  id_relai: 1,
  date_start: '01/09/2023',
  date_end: '07/09/2023',
  products: ordered_products,
  code_promo: "AXTT",
  quantity: 0,
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = panier.products;
  totalTtc = 0;
  codePromo = 'Camping974'
  panier = panier
relais = relais
  ngOnInit() {
    this.totalTtc = this.items.map(item => item.price[0]).reduce((prev, curr) => prev + curr, 0);
    
  }

  decrease(index: number) {
    if (this.items[index].quantity > 0) {
      this.items[index].quantity = this.items[index].quantity - 1
      this.panier.quantity -= 1
    this.calcSum()
  }
  }
  increase(index: number) {
    this.items[index].quantity = this.items[index].quantity + 1
    this.panier.quantity += 1
    this.calcSum()
  }

  clearOrderElement(id: number, quantity: number) {
    this.panier.quantity -=  quantity
    this.items.splice(id, 1)
    this.calcSum()
    
    /* return this.items; */
  }
  clearOrders(id: number) {
    this.panier.quantity = 0
    this.items = [];
    return this.items;
  }

  calcSum() {
    this.totalTtc = this.items.map(item => item.price[0]).reduce((prev, curr) => prev + curr, 0);
  }

  addProduct(product: any) {
    this.panier.quantity += 1
    const productToModify = ordered_products.find(el => el.name === product.name)
    if (productToModify) {
      productToModify.quantity += 1
    this.calcSum()
    return
    }
    ordered_products.push({
      name: product.name,
      nameRoute: product.nameRoute,
      price: [
        product.price[0],
        product.price[1],
        product.price[2],
        product.price[3],
      ],
      promo: product.promo,
      quantity: 1,
      thumbnail: product.thumbnail,
      weight: product.weight,
    })
    this.calcSum()
  }

}