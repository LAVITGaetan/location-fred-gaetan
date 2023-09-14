import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

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
import { BlogComponent } from './views/components/blog/blog.component';
import { AnnonceComponent } from './views/pages/annonce/annonce.component';
import { LoginComponent } from './views/pages/login/login.component';
import { ProducthomeComponent } from './views/components/producthome/producthome.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AuthentificationComponent } from './views/pages/authentification/authentification.component';
import { ToastrModule } from 'ngx-toastr';

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
    BlogComponent,
    AnnonceComponent,
    LoginComponent,
    ProducthomeComponent,
    RegisterComponent,
    AuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    LeafletModule,
    ReactiveFormsModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
