import { Component, Input } from '@angular/core';
import { products } from "../../../../assets/files/product";
import { stocks } from '../../../../assets/files/product';
import { CartService } from '../../../shared/services/cartservice.service';
import { SeoService } from '../../../shared/services/seo.service';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { relais } from 'src/assets/files/relai';


@Component({
  selector: 'app-productlistcontainer',
  templateUrl: './productlistcontainer.component.html',
  styleUrls: ['./productlistcontainer.component.css']
})
export class ProductlistcontainerComponent {
  @Input() produit_depart: number = 0; // nombre de départ
  @Input() produit_arrivee: number = 8; // nombre d'arrivé

  relais = relais;
  defaultDate = new Date().toISOString().split('T')[0];
  defaultStartDate: string = this.defaultDate;
  defaultEndDate: string = this.defaultDate;

  constructor(private seo: SeoService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  // Structure du formulaire de recherche
  searchFormComplete = this.fb.group({
    relai: ['all', Validators.required],
    debut: [this.defaultStartDate, [Validators.required]],
    fin: [this.defaultEndDate, [Validators.required]],
  })

  products = products
  stocks = stocks
  ngOnInit(): void {
    this.seo.setTitle('location-materiel-bivouac-ile-de-la-reunion-974');
    this.seo.setDescription(
      'Tentes Qaou , hamac, matelas gonflables, couteau, siflet, tour de cou'
    );
    this.route.queryParams.subscribe((queryParams) => {
      const debut = queryParams['debut'];
      const fin = queryParams['fin'];
      const relai = queryParams['relai'];
      if (debut) {
        this.defaultStartDate = debut;
        this.searchFormComplete.patchValue({
          debut: debut
        })
      }
      if (fin) {
        this.defaultEndDate = fin;
        this.searchFormComplete.patchValue({
          fin: fin
        })
      }
      if (relai) {
        this.searchFormComplete.patchValue({
          relai: relai
        })
      }
    });

  }

  ajouterItem(product: any) {
    this.cartService.addProduct(product, 1)
  }

  updateEndDate(newStartDate: string) {
    this.defaultStartDate = newStartDate
    if (newStartDate > this.defaultEndDate) {
      this.defaultEndDate = newStartDate;
      this.searchFormComplete.get('fin')?.setValue(newStartDate);
    }
  }

  updateStartDate(newEndDate: string) {
    this.defaultEndDate = newEndDate
    if (newEndDate < this.defaultStartDate) {
      this.defaultStartDate = newEndDate;
      this.searchFormComplete.get('debut')?.setValue(newEndDate);
    }
  }

}
