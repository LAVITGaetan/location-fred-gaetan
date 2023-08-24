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




  constructor(private route: ActivatedRoute, private seo: SeoService, private sanitizer: DomSanitizer) { }
  product: Product | undefined;
  products = products
  id_product = 0;
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    //const productIdFromRoute = Number(routeParams.get('productId'));
    const productIdFromRoute = routeParams.get('productNameRoute');
    // Find the product that correspond with the nameRoute provided in route.
    this.product = products.find(product => product.nameRoute === productIdFromRoute) || undefined;
    this.seo.setTitle(`Location ile de la réunion `);
    this.seo.setDescription(
      `test`
    );
    this.route.params.subscribe(params => {
      const id_product = params['id'];
      console.log('Valeur du paramètre:', id_product);
      this.id_product = id_product
    });
  }
}

