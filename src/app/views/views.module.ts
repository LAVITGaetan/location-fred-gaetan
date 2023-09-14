import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Import des routes
import { ArticledetailComponent } from './components/articledetail/articledetail.component';
import { ArticlelistcontainerComponent } from './pages/articlelistcontainer/articlelistcontainer.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartfullComponent } from './pages/cartfull/cartfull.component';
import { CartshortComponent } from './components/cartshort/cartshort.component';
import { GalerieimageComponent } from './components/galerieimage/galerieimage.component';
import { GalerievideoComponent } from './components/galerievideo/galerievideo.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProducthomeComponent } from './components/producthome/producthome.component';
import { ProductlistcontainerComponent } from './pages/productlistcontainer/productlistcontainer.component';
import { AboutComponent } from './pages/about/about.component';
import { AnnonceComponent } from './pages/annonce/annonce.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GoogleMapsComponent } from './pages/google-maps/google-maps.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    HomepageComponent,
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
    BlogComponent,
    AnnonceComponent,
    ProducthomeComponent
  ],
  exports: [
    HomepageComponent,
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
    BlogComponent,
    AnnonceComponent,
    ProducthomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LeafletModule
  ]
})
export class ViewsModule { }
