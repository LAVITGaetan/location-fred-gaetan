import { Component } from '@angular/core';
import { relais } from 'src/assets/files/relai';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  relais = relais;
}
