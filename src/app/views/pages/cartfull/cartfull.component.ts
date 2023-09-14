import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cartservice.service';
import { relais } from 'src/assets/files/relai';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cartfull',
  templateUrl: './cartfull.component.html',
  styleUrls: ['./cartfull.component.css']
})
export class CartfullComponent implements OnInit {
  panier = this.cartService.panier
  relais = relais
  items = this.cartService.items
  totalTtc = this.cartService.totalTtc
  panier_total:number = 0
  constructor(private cartService: CartService, private panierService: PanierService) { }
  ngOnInit() {
    this.panierService.getPanierTotal().subscribe(value => {
      this.panier_total = value;
    });

    // autofill table for dev purposes
    this.items = [
      {
          "id": 1,
          "name": "Tente de toit: L=210 l=125 H=95",
          "nameRoute": "Tente-de-toit-de-voiture-125",
          "price": {
              "day": 10,
              "week_end": 30,
              "week": 50,
              "month": 100
          },
          "quantity": 1,
          "thumbnail": "./assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp",
          "weight": 50,
          "promo": 0
      },
      {
          "id": 2,
          "name": "Paddle avec gonfleur",
          "nameRoute": "Paddle-avec-gonfleur",
          "price": {
              "day": 10,
              "week_end": 30,
              "week": 50,
              "month": 100
          },
          "quantity": 2,
          "thumbnail": "./assets/images/product/dtentes-ile-de-la-reunion-paddle.webp",
          "weight": 15,
          "promo": 0
      },
      {
          "id": 3,
          "name": "Hamac / double toit vert",
          "nameRoute": "Qaou-Hamac-double-toi-vert",
          "price": {
              "day": 10,
              "week_end": 20,
              "week": 30,
              "month": 40
          },
          "quantity": 1,
          "thumbnail": "./assets/images/product/dtentes-ile-de-la-reunion-Qaou-hamacV4-1-300x300.webp",
          "weight": 0.6,
          "promo": 0
      },
      {
          "id": 4,
          "name": "Bâton de marche ergonomique",
          "nameRoute": "Paire-de-bâtons-de-marche-ergonomiques",
          "price": {
              "day": 5,
              "week_end": 10,
              "week": 15,
              "month": 20
          },
          "quantity": 1,
          "thumbnail": "./assets/images/product/dtentes-ile-de-la-reunion-Baton-de-marche-plie-600x600-webp.webp",
          "weight": 0.3,
          "promo": 0
      }
  ]
    
  }


  clearOrderElement(id: number, quantity: number) {
    this.cartService.clearOrderElement(id, quantity);
  }

  clearOrders(id: number) {
    this.cartService.clearOrders(id);
  }


}