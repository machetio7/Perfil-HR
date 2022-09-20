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

  constructor( public _auth:AngularFireAuth, private _router:Router, private http: HttpClient) { }

  async getLogin(email: string, pass:string){
    this.http.get('https://api.covidtracking.com/v1/us/current.json').subscribe((resp)=>{
      console.warn(resp)
    });
    await this._auth.signInWithEmailAndPassword(email, pass).then(resp=>{
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
