import { Component } from '@angular/core';
import { CartService } from '../cartservice.service';
import { relais } from 'src/assets/files/relai';

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
  constructor(private cartService: CartService) { }

  ngOnChange(): void {
  this.totalTtc = this.cartService.totalTtc
  }

  increase(index: number) {
    this.cartService.increase(index);
  }

  decrease(index: number) {
    this.cartService.decrease(index);
  }

  clearOrderElement(id: number, quantity: number) {
    this.cartService.clearOrderElement(id, quantity);
  }

  clearOrders(id: number) {
    this.cartService.clearOrders(id);
  }

}
