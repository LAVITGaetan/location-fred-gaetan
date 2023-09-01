import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductlistcontainerComponent } from './productlistcontainer/productlistcontainer.component';
import { ProductdetailComponent } from './productlistcontainer/productdetail/productdetail.component';
import { ArticlelistcontainerComponent } from './articlelistcontainer/articlelistcontainer.component';
import { ArticledetailComponent } from './articlelistcontainer/articledetail/articledetail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { GoogleMapsComponent } from './pages/google-maps/google-maps.component';
import { GalerieimageComponent } from './galeries/galerieimage/galerieimage.component';
import { GalerievideoComponent } from './galeries/galerievideo/galerievideo.component';
import { AboutComponent } from './pages/about/about.component';
import { CartfullComponent } from './carts/cartfull/cartfull.component';
import { CartshortComponent } from './carts/cartshort/cartshort.component';
import { NotificationbarComponent } from './layout/notificationbar/notificationbar.component';
import { EnigmeComponent } from './layout/enigme/enigme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    ProductlistcontainerComponent,
    ProductdetailComponent,
    ArticlelistcontainerComponent,
    ArticledetailComponent,
    ContactComponent,
    MentionsLegalesComponent,
    CgvComponent,
    NotfoundComponent,
    GoogleMapsComponent,
    GalerieimageComponent,
    GalerievideoComponent,
    AboutComponent,
    CartfullComponent,
    CartshortComponent,
    NotificationbarComponent,
    EnigmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
