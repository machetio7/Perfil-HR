import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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

  constructor( private _auth:AngularFireAuth, private _router:Router, private http: HttpClient) { }

  async getLogin(email: string, pass:string){
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
