import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importez AngularFireAuth depuis '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Méthode pour s'authentifier avec un email et un mot de passe
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Méthode pour s'inscrire avec un email et un mot de passe
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Méthode pour se déconnecter
  logout() {
    return this.afAuth.signOut();
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isAuthenticated() {
    return this.afAuth.authState !== null;
  }

  // Ajoutez d'autres méthodes selon vos besoins
}
