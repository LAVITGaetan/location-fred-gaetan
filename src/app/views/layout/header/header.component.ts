import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  panier_length: number = 0;
  constructor(private panierService: PanierService) { }
  ngOnInit() {
    this.panierService.getSharedVariable().subscribe(value => {
      this.panier_length = value;
    });
  }
}
