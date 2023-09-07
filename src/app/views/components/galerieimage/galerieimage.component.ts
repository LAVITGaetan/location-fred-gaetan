import { Component } from '@angular/core';
import { galeries } from 'src/assets/files/galerie';

@Component({
  selector: 'app-galerieimage',
  templateUrl: './galerieimage.component.html',
  styleUrls: ['./galerieimage.component.css']
})
export class GalerieimageComponent {
  galeries = galeries;

}
