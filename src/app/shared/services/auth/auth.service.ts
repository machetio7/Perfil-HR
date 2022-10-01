
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { exhaustMap, map, Observable } from 'rxjs';
import { IContact } from 'src/app/data/interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogging!: Boolean;

  public get getIsLogging(): Boolean {
    return this._isLogging;
  }

  public set setIsLogging(value: Boolean) {
    this._isLogging = value;
  }

  constructor( private _auth:AngularFireAuth, private _router:Router, private _db:AngularFirestore) { }

  async getLogin(email: string, pass:string){
    await this._auth.signInWithEmailAndPassword(email, pass).then((resp:any)=>{
      localStorage.setItem('userId', JSON.stringify(resp.user))
    })
  }

  getData():Observable<any>{
    return this._db.collection('contactos', ref => ref.where('members', 'array-contains', 'jeQXzqE7REQ9wNV0Jwgz'))
    .snapshotChanges().pipe(map(actions => actions.map( a =>{
      return a.payload.doc.data()
    })))
    
  }
  isAuth():string | null {
    return localStorage.getItem('userId');
  }

  logOut(){
     this._auth.signOut().then(()=>this._router.navigate(['/']));
  }

}
