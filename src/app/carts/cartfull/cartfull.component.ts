import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';
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
  }


  clearOrderElement(id: number, quantity: number) {
    this.cartService.clearOrderElement(id, quantity);
  }

  clearOrders(id: number) {
    this.cartService.clearOrders(id);
  }


}