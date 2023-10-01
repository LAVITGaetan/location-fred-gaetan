import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getCollection(collectionName: string): AngularFirestoreCollection<any> {
    return this.db.collection(collectionName);
  }

  retrieveUser(uid: string): Observable<User> {
    const document = this.getCollection('user').doc(uid);
    return document.valueChanges()
  }

  editUser(uid: string, newData: object) {
    const user = this.getCollection('user').doc(uid);
    if (user) {
      user.update(newData)
    }
  }
}
