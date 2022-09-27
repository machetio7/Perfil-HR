import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';

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

  constructor( private _auth:AngularFireAuth, private _router:Router, private http: HttpClient, private _db:AngularFirestore) { }

  async getLogin(email: string, pass:string){
    this._db.collection('contactos', ref => ref.where('members', 'array-contains', 'jeQXzqE7REQ9wNV0Jwgz'))
    .snapshotChanges().pipe(map(actions => actions.map( a =>{
      return a.payload.doc.data()
    }))).subscribe(console.log)

    await this._auth.signInWithEmailAndPassword(email, pass).then((resp:any)=>{
      localStorage.setItem('userId', JSON.stringify(resp.user))
    })
  }


  isAuth():string | null {
    return localStorage.getItem('userId');
  }

  logOut(){
     this._auth.signOut().then(()=>this._router.navigate(['/']));
  }

}
