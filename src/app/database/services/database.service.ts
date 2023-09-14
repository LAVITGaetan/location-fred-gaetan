import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  /* obtient un collection */
  getCollection(collectionName: string): AngularFirestoreCollection<any> {
    return this.firestore.collection(collectionName);
  }

  /* recupere les items en tant qu'observable donc avec mise a jour*/
  getAllItems(collectionName: string): Observable<any[]> {
    const collection = this.getCollection(collectionName);
    return collection.valueChanges();
  }
  retrieveUser(uid: string): Observable<user> {
    const collection = this.getCollection('user').doc(uid);
    return collection.valueChanges();
  }

  /* ajoute un item*/
  addItem(collectionName: string, itemData: any): Promise<any> {
    const collection = this.getCollection(collectionName);
    return collection.add(itemData);
  }

  /* Efface tous les champs qui ont par exemple name ='fred' */
  deleteItemByField(collectionName: string, fieldName: string, fieldValue: any): Promise<void> {
    const collection = this.getCollection(collectionName);

    // Recherchez les documents correspondant au champ spécifié
    return new Promise<void>((resolve, reject) => {
      collection.ref.where(fieldName, '==', fieldValue).get().then(querySnapshot => {
        const deletePromises: Promise<void>[] = [];
        querySnapshot.forEach(doc => {
          deletePromises.push(doc.ref.delete());
        });
        Promise.all(deletePromises)
          .then(() => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    });
  }


  /* supprime par id du document generer automatiquement par firebase : pas trop utile*/
  deleteItem(collectionName: string, itemId: string): Promise<void> {
    const collection = this.getCollection(collectionName);
    return collection.doc(itemId).delete();
  }

  /* supprime la collection */
  deleteCollection(collectionName: string): Promise<void> {
    const collection = this.getCollection(collectionName);

    // Supprimez tous les documents de la collection un par un
    return new Promise<void>((resolve, reject) => {
      collection.ref.get().then(querySnapshot => {
        const deletePromises: Promise<void>[] = [];
        querySnapshot.forEach(doc => {
          deletePromises.push(doc.ref.delete());
        });
        Promise.all(deletePromises)
          .then(() => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    });
  }
  /*  connaitre toutes collections existantes dans une base de données */
  getCollections() {
    return this.getAllItems('collections');

  }
}
