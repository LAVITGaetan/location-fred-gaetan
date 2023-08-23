import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductlistcontainerComponent } from './productlistcontainer/productlistcontainer.component';
import { ProductdetailComponent } from './productlistcontainer/productdetail/productdetail.component';
import { ArticledetailComponent } from './articlelistcontainer/articledetail/articledetail.component';
import { ArticlelistcontainerComponent } from './articlelistcontainer/articlelistcontainer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { GalerieimageComponent } from './galeries/galerieimage/galerieimage.component';
import { GalerievideoComponent } from './galeries/galerievideo/galerievideo.component';
import { AboutComponent } from './pages/about/about.component';
import { CartfullComponent } from './carts/cartfull/cartfull.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
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
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollOffset: [0, 0], scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
