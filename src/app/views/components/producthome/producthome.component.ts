import { Component } from '@angular/core';
import { products } from 'src/assets/files/product';

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css']
})
export class ProducthomeComponent {
  product_count = 4
  products = products.slice(0, this.product_count)
}
