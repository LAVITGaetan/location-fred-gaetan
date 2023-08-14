import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { products, Product } from 'src/assets/files/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {

  product: Product | undefined;
  quantity: number = 1;
  compteur_image: number = 0
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    //const productIdFromRoute = Number(routeParams.get('productId'));
    const productIdFromRoute = routeParams.get('productNameRoute');
    // Find the product that correspond with the nameRoute provided in route.
    this.product = products.find(product => product.nameRoute === productIdFromRoute);
    this.seo.setTitle(productIdFromRoute || 'Article Dtente.re');
    this.seo.setDescription(
      'île de la réunion, Tentes Qaou , hamac, matelas gonflables, couteau, siflet, tour de cou'
    );
  }


  constructor(private route: ActivatedRoute, private seo: SeoService, private sanitizer: DomSanitizer) { }

}

