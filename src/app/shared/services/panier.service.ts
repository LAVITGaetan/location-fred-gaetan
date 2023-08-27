import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { panier } from 'src/app/carts/cartservice.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier_length: BehaviorSubject<number> = new BehaviorSubject<number>(panier.quantity);
  private panier_total: BehaviorSubject<number> = new BehaviorSubject<number>(panier.products.map(item => item.price[0] * item.quantity).reduce((prev, curr) => prev + curr, 0));

  updatePanierLength(newValue: number) {
    this.panier_length.next(newValue);
  }

  getSharedVariable() {
    return this.panier_length.asObservable();
  }
  
  getPanierTotal() {
    return this.panier_total.asObservable();
  }
}