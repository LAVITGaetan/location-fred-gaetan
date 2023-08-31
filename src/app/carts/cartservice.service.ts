import { Injectable } from '@angular/core';
import { Orders } from 'src/assets/files/order';
import { relais } from 'src/assets/files/relai';
import { PanierService } from '../shared/services/panier.service';

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
  total: number
}

export const panier: Panier = {
  id: 1,
  id_user: 1,
  id_relai: 1,
  date_start: '01/09/2023',
  date_end: '07/09/2023',
  products: ordered_products,
  code_promo: "AXTT",
  quantity: 0,
  total: 0
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
  item_exist: any
  ngOnInit() {
    this.totalTtc = this.items.map(item => item.price.day).reduce((prev, curr) => prev + curr, 0);
  }
  constructor(private panierService: PanierService) { }

  // Increase and decrease with id
  decreaseFromId(id: number) {
    let item = this.items.find(el => el.id == id) || { quantity: 0 }
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1
      this.panier.quantity -= 1
      this.calcSum()
      if (item.quantity == 0) {
        const index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1)
      }
    }
  }
  increaseFromId(id: number) {
    let item = this.items.find(el => el.id == id) || { quantity: 0 }
    item.quantity = item.quantity + 1
    this.panier.quantity += 1
    this.calcSum()
    this.panierService.updatePanierLength(panier.quantity);
  }

  clearOrderElement(id: number, quantity: number) {
    this.panier.quantity -= quantity
    this.items.splice(id, 1)
    this.calcSum()
    this.panierService.updatePanierLength(panier.quantity);
  }
  clearOrders(id: number) {
    this.panier.quantity = 0
    this.items = [];
    this.panierService.updatePanierLength(panier.quantity);
    return this.items;
  }

  calcSum() {
    this.totalTtc = this.items.map(item => item.price.day * item.quantity).reduce((prev, curr) => prev + curr, 0);
    panier.total = this.totalTtc
  }

  addProduct(product: any, quantity: number) {
    this.panier.quantity += quantity
    const productToModify = ordered_products.find(el => el.name === product.name)
    if (productToModify) {
      productToModify.quantity += quantity
      this.calcSum()
      this.panierService.updatePanierLength(panier.quantity);
      return
    }
    ordered_products.push({
      id: ordered_products.length + 1,
      name: product.name,
      nameRoute: product.nameRoute,
      price: {
        day: product.price.day,
        week_end: product.price.week_end,
        week: product.price.week,
        month: product.price.month,
      },
      promo: product.promo,
      quantity: quantity,
      thumbnail: product.thumbnail,
      weight: product.weight,
    })
    this.calcSum()
    this.panierService.updatePanierLength(panier.quantity);
  }

  addFromDetail(id: number, quantity: number, product: object) {
    const item_exist = this.items.find(el => el.id == id) || undefined
    if (item_exist != undefined) {
      this.item_exist += quantity
    } else {
      this.addProduct(product, quantity)
    }
    this.calcSum()
  }

}