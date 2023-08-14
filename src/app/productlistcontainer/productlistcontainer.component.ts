import { Component } from '@angular/core';
import { products } from "../../assets/files/product";
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-productlistcontainer',
  templateUrl: './productlistcontainer.component.html',
  styleUrls: ['./productlistcontainer.component.css']
})
export class ProductlistcontainerComponent {
  constructor(private seo: SeoService) { }
  products = products
  ngOnInit(): void {
    this.seo.setTitle('location-materiel-bivouac-ile-de-la-reunion-974');
    this.seo.setDescription(
      'Tentes Qaou , hamac, matelas gonflables, couteau, siflet, tour de cou'
    );
  }
}
