import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import downloaded modules
import { ToastrModule } from 'ngx-toastr';

// Import database module
import { DatabaseModule } from './database/database.module';

// import custom modules
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    DatabaseModule,
    HttpClientModule,
    CoreModule,
    AccountModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
