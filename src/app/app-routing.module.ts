import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import des composants
import { HomepageComponent } from './views/pages/homepage/homepage.component';
import { ProductdetailComponent } from './views/components/productdetail/productdetail.component';
import { ArticledetailComponent } from './views/components/articledetail/articledetail.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { MentionsLegalesComponent } from './views/pages/mentions-legales/mentions-legales.component';
import { CgvComponent } from './views/pages/cgv/cgv.component';
import { NotfoundComponent } from './views/pages/notfound/notfound.component';
import { GalerieimageComponent } from './views/components/galerieimage/galerieimage.component';
import { GalerievideoComponent } from './views/components/galerievideo/galerievideo.component';
import { AboutComponent } from './views/pages/about/about.component';
import { GoogleMapsComponent } from './views/pages/google-maps/google-maps.component';
import { AnnonceComponent } from './views/pages/annonce/annonce.component';
import { AuthentificationComponent } from './account/components/authentification/authentification.component';
import { ArticlelistcontainerComponent } from './views/pages/articlelistcontainer/articlelistcontainer.component';
import { CartfullComponent } from './views/pages/cartfull/cartfull.component';
import { ProductlistcontainerComponent } from './views/pages/productlistcontainer/productlistcontainer.component';
import { ProfilComponent } from './account/components/profil/profil.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'deposer-une-annonce', component: AnnonceComponent },
  { path: 'location-bivouac-rando-ile-reunion', component: ProductlistcontainerComponent },
  { path: 'location-bivouac-rando-ile-reunion/:productNameRoute/:id', component: ProductdetailComponent },
  { path: 'article-bivouac-rando-ile-reunion', component: ArticlelistcontainerComponent },
  { path: 'article-bivouac-rando-ile-reunion/:articleNameRoute/:id', component: ArticledetailComponent },
  { path: 'galerie-bivouac-rando-ile-reunion', component: GalerieimageComponent },
  { path: 'video-bivouac-rando-ile-reunion', component: GalerievideoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cgv', component: CgvComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'panier', component: CartfullComponent },
  { path: 'map', component: GoogleMapsComponent },
  { path: 'authentification', component: AuthentificationComponent },
  {path: 'profil', component: ProfilComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollOffset: [0, 0], scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
