import { Component } from '@angular/core';
import { composants } from 'src/assets/files/composant';

@Component({
  selector: 'app-notificationbar',
  templateUrl: './notificationbar.component.html',
  styleUrls: ['./notificationbar.component.css']
})
export class NotificationbarComponent {
  composants = composants
  composantVisible = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.composantVisible = true;
    }, 2000); // 2000 ms (2 secondes) de délai
  }

  hideComponent() {
    this.composantVisible = false;
  }

} 
