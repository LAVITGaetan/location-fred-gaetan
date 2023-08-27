import { Component, Input } from '@angular/core';
import { products } from "../../assets/files/product";
import { stocks } from '../../assets/files/product';
import { CartService } from '../carts/cartservice.service';
import { SeoService } from '../shared/services/seo.service';


@Component({
  selector: 'app-productlistcontainer',
  templateUrl: './productlistcontainer.component.html',
  styleUrls: ['./productlistcontainer.component.css']
})
export class ProductlistcontainerComponent {
  @Input() produit_depart: number = 0; // nombre de départ
  @Input() produit_arrivee: number = 8; // nombre d'arrivé

  constructor(private seo: SeoService, private cartService: CartService) { }
  products = products
  stocks = stocks
  ngOnInit(): void {
    console.log(this.produit_depart);
    this.seo.setTitle('location-materiel-bivouac-ile-de-la-reunion-974');
    this.seo.setDescription(
      'Tentes Qaou , hamac, matelas gonflables, couteau, siflet, tour de cou'
    );
  }

  changeParam() {
    // Afficher moins de produits
    if (this.produit_arrivee == 16) {
      this.produit_arrivee = 8
      document.getElementsByClassName('product-show-more')[0].innerHTML = '+'
    }
    // Afficher plus de produits
    else {
      this.produit_arrivee = 16;
      document.getElementsByClassName('product-show-more')[0].innerHTML = '-'
    }
  }

  ajouterItem(product: any) {
    this.cartService.addProduct(product)
  }


}
