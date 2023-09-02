import { Component } from '@angular/core';
import { relais } from 'src/assets/files/relai';
import { configurations } from 'src/assets/files/composant';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  relais = relais;
  configurations = configurations;
}
