import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Import des composants
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ProfilComponent } from './components/profil/profil.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthentificationComponent, ProfilComponent],
  exports: [LoginComponent, RegisterComponent, AuthentificationComponent, ProfilComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class AccountModule { }
