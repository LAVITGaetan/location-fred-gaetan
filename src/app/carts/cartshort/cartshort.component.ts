import { Component } from '@angular/core';
import { CartService } from '../cartservice.service';

export interface Orders {
  name: string;
  nameRoute: string;
  price: number;
  promo: number;
  quantity: number;
  thumbnail: string;
  weight: number
}

const order: Orders[] = [
  {
    name: 'Tente Qaou V5 pack 3en1',
    nameRoute: 'Tente-Qaou-V5-pack-3en1',
    price: 179,
    promo: 179,
    quantity: 1,
    thumbnail: '../../assets/images/product/qaou/Qaou-Sleeping-pad2-300x300.webp',
    weight: 2.1,
  },
  { name: 'Tente Qaou V5 pack 6en1', nameRoute: 'Tente-Qaou-V5-pack-6en1', price: 239, promo: 239, quantity: 1, thumbnail: '../../assets/images/product/qaou/Qaou-Sleeping-pad2-300x300.webp', weight: 3.3 },
  { name: 'Hamac double toit', nameRoute: 'Qaou-Hamac-double-toi-vert', price: 29, promo: 29, quantity: 1, thumbnail: '../../assets/images/product/qaou/Qaou-Sleeping-pad2-300x300.webp', weight: 0.6 },
  { name: 'Matelas trek gonflable', nameRoute: 'Qaou-Matelas-Randonnée', price: 45, promo: 45, quantity: 1, thumbnail: '../../assets/images/product/qaou/Qaou-Sleeping-pad2-300x300.webp', weight: 0.65 },
];

export interface Panier {
  id: number,
  id_user: number,
  date_start: string,
  date_end: string,
  id_relai: number
  products: Orders[],
  code_promo: string

}

const panier:  Panier = {
  id: 1,
  id_user: 1,
  id_relai: 1,
  date_start: '1212',
  date_end: '1414',
  products: order,  
  code_promo: "AXTT"
}

@Component({
  selector: 'app-cartshort',
  templateUrl: './cartshort.component.html',
  styleUrls: ['./cartshort.component.css']
})

export class CartshortComponent {
  longueur: number = 0;
  items = panier.products;
  totalTtc = 0;
  totalWeight = 0;
  codePromo = 'Camping974'
  panier = panier

  ngOnInit() {
    this.totalTtc = this.items.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
  }

  constructor(
    private cartService: CartService
  ) { this.longueur = this.items.length }

  decrease(index: number, qty: number) {
    if (this.items[index].quantity > 0) {
      this.items[index].quantity = this.items[index].quantity - 1
      this.calculateOrder(index)
    }
  }
  increase(index: number, qty: number) {
    this.items[index].quantity = this.items[index].quantity + 1;
    this.calculateOrder(index)
  }

  calculateOrder(index: number) {
    this.items[index].weight = this.items[index].weight * this.items[index].quantity;
    this.items[index].price = this.items[index].price * this.items[index].quantity;
    /* une decimal pour le poids */
    this.items[index].weight = Math.floor(this.items[index].weight * 10) / 10
    /* deux decimal pour le prix */
    this.items[index].price = Math.floor(this.items[index].price * 100) / 100
    /* Calcul du prix total */
    this.totalTtc = this.items.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    this.totalTtc = Math.floor(this.totalTtc * 100) / 100

  }

  clearOrderElement(id: number) {
    this.items.splice(id, 1)
    this.longueur = this.items.length
    this.calcSum()

    /* return this.items; */
  }
  clearOrders(id: number) {
    this.items = [];
    return this.items;
  }

  calcSum() {
    this.totalTtc = this.items.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

  }
}
