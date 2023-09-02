import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cartservice.service';
import { relais } from 'src/assets/files/relai';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cartshort',
  templateUrl: './cartshort.component.html',
  styleUrls: ['./cartshort.component.css']
})

export class CartshortComponent {
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

  increaseFromId(id: number) {
    this.cartService.increaseFromId(id);
  }

  decreaseFromId(id: number) {
    this.cartService.decreaseFromId(id);
  }

  clearOrderElement(id: number, quantity: number) {
    this.cartService.clearOrderElement(id, quantity);
  }

  clearOrders(id: number) {
    this.cartService.clearOrders(id);
  }

}
