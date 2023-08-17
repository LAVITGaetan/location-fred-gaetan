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

const routes: Routes = [
  { path: '', component: ProductlistcontainerComponent },
  { path: 'location-bivouac-rando-ile-reunion', component: ProductlistcontainerComponent },
  { path: 'location-bivouac-rando-ile-reunion/:productNameRoute', component: ProductdetailComponent },
  { path: 'article-bivouac-rando-ile-reunion', component: ArticlelistcontainerComponent },
  { path: 'article-bivouac-rando-ile-reunion/:articleNameRoute/:id', component: ArticledetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cgv', component: CgvComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
