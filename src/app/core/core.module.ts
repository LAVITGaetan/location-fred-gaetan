import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Import des composants
import { HeaderComponent } from './components/header/header.component';
import { NotificationbarComponent } from './components/notificationbar/notificationbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, NotificationbarComponent, FooterComponent],
  exports: [HeaderComponent, NotificationbarComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class CoreModule { }
