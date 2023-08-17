import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProductlistcontainerComponent } from './productlistcontainer/productlistcontainer.component';
import { ProductdetailComponent } from './productlistcontainer/productdetail/productdetail.component';
import { ArticlelistcontainerComponent } from './articlelistcontainer/articlelistcontainer.component';
import { ArticledetailComponent } from './articlelistcontainer/articledetail/articledetail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CgvComponent } from './pages/cgv/cgv.component';

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
    CgvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
