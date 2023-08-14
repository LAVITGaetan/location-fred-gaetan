import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductlistcontainerComponent } from './productlistcontainer/productlistcontainer.component';
import { ProductdetailComponent } from './productlistcontainer/productdetail/productdetail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'location-bivouac-rando-ile-reunion', component: ProductlistcontainerComponent },
  { path: 'location-bivouac-rando-ile-reunion/:productNameRoute', component: ProductdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
