import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { HomepageComponent } from './views/pages/homepage/homepage.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { ProductlistcontainerComponent } from './views/components/productlistcontainer/productlistcontainer.component';
import { ProductdetailComponent } from './views/components/productdetail/productdetail.component';
import { ArticlelistcontainerComponent } from './views/components/articlelistcontainer/articlelistcontainer.component';
import { ArticledetailComponent } from './views/components/articledetail/articledetail.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { MentionsLegalesComponent } from './views/pages/mentions-legales/mentions-legales.component';
import { CgvComponent } from './views/pages/cgv/cgv.component';
import { NotfoundComponent } from './views/pages/notfound/notfound.component';
import { GoogleMapsComponent } from './views/pages/google-maps/google-maps.component';
import { GalerieimageComponent } from './views/components/galerieimage/galerieimage.component';
import { GalerievideoComponent } from './views/components/galerievideo/galerievideo.component';
import { AboutComponent } from './views/pages/about/about.component';
import { CartfullComponent } from './views/components/cartfull/cartfull.component';
import { CartshortComponent } from './views/components/cartshort/cartshort.component';
import { NotificationbarComponent } from './views/layout/notificationbar/notificationbar.component';

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
