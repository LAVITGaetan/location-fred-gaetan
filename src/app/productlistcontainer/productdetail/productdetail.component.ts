import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { products, Product } from 'src/assets/files/product';
import { CartService } from 'src/app/carts/cartservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  panier = this.cartService.panier
  items = this.cartService.items
  item: any
  item_quantity: number = 1

  constructor(private route: ActivatedRoute, private seo: SeoService, private sanitizer: DomSanitizer, private cartService: CartService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productNameRoute');
    // Find the product that correspond with the nameRoute provided in route.
    this.product = products.find(product => product.nameRoute === productIdFromRoute) || undefined;
    this.seo.setTitle(`Location ile de la réunion `);
    this.seo.setDescription(
      'île de la réunion, Location'
    );
    this.route.params.subscribe(params => {
      const id_product = params['id'];
      this.id_product = id_product
    });
    this.item = this.items.find(el => el.id === this.id_product) || undefined
  }

  modifyQuantity(arg: string) {
    if(arg === 'increase') {
      this.item_quantity += 1;
    }
    else if(arg === 'decrease' && this.item_quantity > 1) {
      this.item_quantity -= 1;
    }
    else {
      console.log('action impossible');
    }
  }

  addToCart(id: number, quantity: number, product:object) {
    this.cartService.addFromDetail(id, quantity, product)
  }

  displayYoutubeModal(title: string, src: string) {
    let modal_box = document.getElementById('youtube-modal')
    let modal_title = document.getElementById('youtube-modal-title')
    let modal_iframe = document.getElementById('youtube-modal-iframe')
    if(modal_box) {
      modal_box.style.display = 'block'
    }
    if(modal_title) {
      modal_title.innerHTML = title
    }
    if(modal_iframe) {
      modal_iframe.setAttribute("src", `https://www.youtube.com/embed/${src}`)
    }
  }

  closeYoutubeModal() {
    let modal_box = document.getElementById('youtube-modal')
    if(modal_box) {
      modal_box.style.display = 'none'
    }
  }

  selectImage(src: string) {
    let main_image = document.getElementById('main-image')
    if(main_image) {
      main_image.setAttribute('src', src)
    }
  }

  product: Product | undefined;
  id_product = 0;
}
